"use client";

import { FaUpload } from "react-icons/fa6";
import "./gentcg.style.css";
import ActivityAsidePanel from "@petnet/components/activities/asidePanel";
import { ChangeEvent, useReducer, useState } from "react";
import CanvasTCG from "@petnet/components/activities/canvasTCG";
import TReducerActionCanvasTCG from "@petnet/types/reducerActionCanvasTCG.type";
import { ICanvasTCGForm } from "@petnet/types/canvasTCG.interface";
import { TbPlayCardStarFilled } from "react-icons/tb";

const GenTCG = () => {
    const reducer = (
        state: ICanvasTCGForm,
        action: TReducerActionCanvasTCG
    ) => {
        switch (action.type) {
            case "changePetName":
                return {
                    ...state,
                    petName: action.payload,
                } as ICanvasTCGForm;
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
            default:
                return { ...state };
        }
    };

    const [file, setFile] = useState<File>();
    const [formInformations, dispatchFormInformations] = useReducer(reducer, {
        atk: 0,
        def: 0,
        magic: 0,
        petName: "",
        ultimate: "",
        cardType: "Water",
    } as ICanvasTCGForm);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
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

    return (
        <div className="TCGeneratorContainer">
            <ActivityAsidePanel />

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

                <button type="button">Gerar carta</button>
            </div>
            {/*
            <div className="generationContainer">
                <form>
                    <label>Pet image: </label>
                    {!file ? (
                        <></>
                    ) : (
                        <img
                            src={URL.createObjectURL(file)}
                            alt="imageProfile"
                            className="petImage"
                        />
                    )}
                    <span className="fileContainer">
                        <input
                            type="file"
                            className="petPictureLabel"
                            id="petPictureLabel"
                            accept=".png,.jpg,.jpeg,.webp"
                            onChange={(event) => handleFileUpload(event)}
                        />
                        <label
                            className="petPictureLabel"
                            htmlFor="petPictureLabel"
                        >
                            <FaUpload className="uploadLabelIcon" />
                            Clique para fazer o upload
                        </label>
                    </span>

                    <label>Pet name: </label>
                    <input
                        name="petName"
                        placeholder="Brutus... "
                        value={formInformations.petName}
                        onChange={(event) =>
                            dispatchFormInformations({
                                type: "changePetName",
                                payload: event.target.value,
                            })
                        }
                    />

                    <label>Card type: </label>
                    <select
                        className="cardType"
                        onChange={(event) =>
                            dispatchFormInformations({
                                type: "changeCardType",
                                payload: event.target
                                    .value as ICanvasTCGForm["cardType"],
                            })
                        }
                    >
                        <option value="Water">💧 Agua</option>
                        <option value="Fire">🔥 Fogo</option>
                        <option value="Plant">🍂 Planta</option>
                        <option value="Ice">❄️ Gelo</option>
                        <option value="Shock">⚡ Shock</option>
                        <option value="Ghost">🎃 Fantasma</option>
                        <option value="Fairy">🧁 Fada</option>
                    </select>

                    <label>Ultimate: </label>
                    <select
                        className="ultimateOptions"
                        onChange={(event) =>
                            dispatchFormInformations({
                                type: "changeUltimate",
                                payload: event.target.value,
                            })
                        }
                    >
                        <option>Bola de fogo</option>
                        <option>Bola de fogo</option>
                        <option>Bola de fogo</option>
                    </select>

                    <button type="button" className="btnGenerateCard">
                        Gerar card
                    </button>
                </form>
            </div> */}
        </div>
    );
};

export default GenTCG;
