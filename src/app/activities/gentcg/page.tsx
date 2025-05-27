"use client";

import "./gentcg.style.css";
import ActivityAsidePanel from "@petnet/components/activities/asidePanel";
import { ChangeEvent, useReducer, useState } from "react";
import TReducerActionCanvasTCG from "@petnet/types/reducerActionCanvasTCG.type";
import {
    EUltimatesFairy,
    ICanvasTCGForm,
} from "@petnet/types/canvasTCG.interface";
import { TbPlayCardStarFilled } from "react-icons/tb";
import { RiLoopRightLine } from "react-icons/ri";
import { FaUpload } from "react-icons/fa6";
import CanvasTCG from "@petnet/components/activities/canvasTCG";
import {
    generateTCGType,
    generateUltimate,
    generateUltimateDescription,
} from "@petnet/helpers/generateTcg";

const GenTCG = () => {
    const reducer = (
        state: ICanvasTCGForm,
        action: TReducerActionCanvasTCG
    ): ICanvasTCGForm => {
        switch (action.type) {
            case "changePetName":
                if (action.payload.length <= 20) {
                    return {
                        ...state,
                        petName: action.payload,
                    } as ICanvasTCGForm;
                }

                return { ...state } as ICanvasTCGForm;
            case "changeUltimate":
                return {
                    ...state,
                    ultimate: action.payload,
                } as ICanvasTCGForm;
            case "changeAtk":
                return {
                    ...state,
                    atk: action.payload,
                } as ICanvasTCGForm;
            case "changeDef":
                return {
                    ...state,
                    def: action.payload,
                } as ICanvasTCGForm;
            case "changeMagic":
                return {
                    ...state,
                    magic: action.payload,
                } as ICanvasTCGForm;
            case "changeCardType":
                return {
                    ...state,
                    cardType: action.payload,
                } as ICanvasTCGForm;
            case "changeUltimateDescription":
                return {
                    ...state,
                    ultimateDescription: action.payload,
                } as ICanvasTCGForm;
            default:
                return { ...state };
        }
    };

    const [formInformations, dispatchFormInformations] = useReducer(reducer, {
        atk: 0,
        def: 0,
        magic: 0,
        petName: "",
        ultimate: EUltimatesFairy.Heal,
        cardType: "Water",
        ultimateDescription: "",
    } as ICanvasTCGForm);

    const [file, setFile] = useState<File>();
    const [showUploadPopup, setShowUploadPopup] = useState(false);
    const [showAditionalDetails, setShowAditionalDetails] = useState(false);
    const [showCardPopup, setShowCardPopup] = useState(false);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        const files = event.target.files;
        if (!files || !files.length) return;

        const tmpFile: File = files[0];

        if (tmpFile) {
            if (
                tmpFile.type !== "image/png" &&
                tmpFile.type !== "image/jpg" &&
                tmpFile.type !== "image/jpeg" &&
                tmpFile.type !== "image/webp"
            ) {
                return;
            }

            console.log(tmpFile);
            setFile(tmpFile);
        }
    };

    const handleClosePopups = (): void => {
        setShowAditionalDetails(false);
        setShowCardPopup(false);
        setShowUploadPopup(false);
    };

    const handleGenerateTCG = () => {
        if (formInformations.petName.length) {
            const atkGenerated = Math.floor(Math.random() * 21) + 1;
            const defGenerated = Math.floor(Math.random() * 21) + 1;
            const magicGenerated = Math.floor(Math.random() * 21) + 1;

            const cardType = generateTCGType();

            dispatchFormInformations({
                type: "changeAtk",
                payload: atkGenerated,
            });
            dispatchFormInformations({
                type: "changeDef",
                payload: defGenerated,
            });
            dispatchFormInformations({
                type: "changeMagic",
                payload: magicGenerated,
            });
            dispatchFormInformations({
                type: "changeCardType",
                payload: cardType,
            });
            dispatchFormInformations({
                type: "changeUltimate",
                payload: generateUltimate(cardType),
            });
            dispatchFormInformations({
                type: "changeUltimateDescription",
                payload: generateUltimateDescription(cardType),
            });

            setShowAditionalDetails(false);
            setShowCardPopup(true);
        }
    };

    return (
        <div className="TCGeneratorContainer">
            <ActivityAsidePanel />
            {showCardPopup ? (
                <CanvasTCG
                    atk={formInformations.atk}
                    def={formInformations.def}
                    magic={formInformations.magic}
                    petName={formInformations.petName}
                    cardType={formInformations.cardType}
                    ultimate={formInformations.ultimate}
                    ultimateDescription={formInformations.ultimateDescription}
                    imagePath={URL.createObjectURL(file!)}
                />
            ) : (
                <></>
            )}

            <div className="introContainer">
                <span className="cardListContainer">
                    <TbPlayCardStarFilled className="cardIcon firstLeftCard" />
                    <TbPlayCardStarFilled className="cardIcon secondLeftCard" />
                    <TbPlayCardStarFilled className="cardIcon centerCard" />
                    <TbPlayCardStarFilled className="cardIcon secondRightCard" />
                    <TbPlayCardStarFilled className="cardIcon firstRightCard" />
                </span>
                <h1>Gerador de cartas colecionaveis</h1>
                <h3>
                    Colecione cartas do seu pet e divirta-se enfrentando outros
                    players{" "}
                </h3>

                <button type="button" onClick={() => setShowUploadPopup(true)}>
                    <RiLoopRightLine className="btnIcon" /> Gerar carta
                </button>
            </div>
            {showUploadPopup ? (
                <div
                    className="uploadProfileWrapper"
                    onClick={() => handleClosePopups()}
                >
                    <div
                        className="uploadProfileContainer"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h1>Upload de imagem</h1>

                        {file ? (
                            <img
                                src={URL.createObjectURL(file)}
                                alt="petImage"
                            />
                        ) : (
                            <h2 className="uploadSupportText">
                                Queremos ver a melhor imagem do seu pet 😍
                            </h2>
                        )}

                        <span className="btnRow">
                            <button
                                type="button"
                                className={file ? "selected" : "unselected"}
                                onClick={() => {
                                    if (file) {
                                        setShowUploadPopup(false);
                                        setShowAditionalDetails(true);
                                    }
                                }}
                            >
                                <TbPlayCardStarFilled className="btnClickable" />
                                Ir para detalhes
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                name="petCardImage"
                                id="petCardImage"
                                onChange={(event) => handleFileUpload(event)}
                            />
                            <label
                                className="petCardImageLabel"
                                htmlFor="petCardImage"
                            >
                                <FaUpload className="btnClickable" />
                                Enviar imagem
                            </label>
                        </span>
                    </div>
                </div>
            ) : (
                <></>
            )}

            {showAditionalDetails ? (
                <div
                    className="nameInputWrapper"
                    onClick={() => handleClosePopups()}
                >
                    <div
                        className="nameInputContainer"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h1>Informacoes adicionais: </h1>
                        <label>Nome do pet: </label>
                        <input
                            type="text"
                            placeholder="Brutus..."
                            name="petName"
                            value={formInformations.petName}
                            onChange={(event) =>
                                dispatchFormInformations({
                                    payload: event.target.value,
                                    type: "changePetName",
                                })
                            }
                        />
                        <span className="btnRow">
                            <button type="button" className="btnBack">
                                Voltar
                            </button>

                            <button
                                type="button"
                                className="selected"
                                onClick={() => handleGenerateTCG()}
                            >
                                Gerar
                            </button>
                        </span>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default GenTCG;
