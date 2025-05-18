"use client";

import { FaRegAddressCard, FaUpload } from "react-icons/fa";
import "./activities.style.css";

import ActivityAsidePanel from "@petnet/components/activities/asidePanel";
import { ChangeEvent, useReducer, useState } from "react";
import CanvasPetDocument from "@petnet/components/activities/canvasPetDocument";
import {
    ICanvasPetDocument,
    ICanvasPetDocumentForm,
} from "@petnet/types/canvasPetDocument.interface";
import { TReducerActionCanvasPetDocument } from "@petnet/types/reducerActionCanvasPetDocument.type";
import { FaCameraRetro } from "react-icons/fa6";

const Activities = () => {
    const formReducer = (
        state: ICanvasPetDocumentForm,
        action: TReducerActionCanvasPetDocument
    ) => {
        switch (action.type) {
            case "changeAnimalType":
                return {
                    ...state,
                    animalType: action.payload,
                } as ICanvasPetDocumentForm;
            case "changeBirthDate":
                return {
                    ...state,
                    birthDate: action.payload,
                } as ICanvasPetDocumentForm;
            case "changePetName":
                return {
                    ...state,
                    petName: action.payload,
                } as ICanvasPetDocumentForm;
            case "changePetSex":
                return {
                    ...state,
                    petSex: action.payload,
                } as ICanvasPetDocumentForm;
            case "changeRace":
                return {
                    ...state,
                    race: action.payload,
                } as ICanvasPetDocumentForm;
            case "changeDateFormatted":
                return {
                    ...state,
                    birthDateFormatted: action.payload,
                } as ICanvasPetDocumentForm;
            default: {
                return { ...state };
            }
        }
    };

    const [file, setFile] = useState<File | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [showGenerationDocument, setShowGenerationDocument] = useState(false);
    const [formInformation, dispatchFormInformation] = useReducer(formReducer, {
        animalType: "Outros",
        birthDate: "",
        petName: "",
        petSex: "male",
        race: "",
        birthDateFormatted: "",
    });
    const [documentColor, setDocumentColor] =
        useState<ICanvasPetDocument["documentType"]>("Blue");
    const [showImagePreview, setShowImagePreview] = useState(false);

    const handleOpenForm = () => {
        if (!file) {
            return;
        }

        setShowImagePreview(false);
        setShowForm(true);
    };

    const handleGenerateDocument = () => {
        if (
            !formInformation.birthDate ||
            !formInformation.petName ||
            !formInformation.race
        ) {
            return;
        }

        const [year, month, day] = formInformation.birthDate.split("-");
        dispatchFormInformation({
            type: "changeDateFormatted",
            payload: `${day}/${month}/${year}`,
        });

        setShowForm(false);
        setShowGenerationDocument(true);
    };

    const handleCloseDocument = () => {
        setShowGenerationDocument(false);
    };

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
            setShowImagePreview(true);
        }
    };

    const handleChangeDocumentColor = (
        isPreviousOrNextColor: "previous" | "next"
    ) => {
        const colors = ["Blue", "Brown", "Green", "Pink", "Purple"];
        const colorIndex =
            colors.findIndex((color) => documentColor === color) ?? 0;
        let selectedColor = "";

        if (isPreviousOrNextColor === "previous") {
            if (colorIndex - 1 < 0) {
                selectedColor = colors[colors.length - 1];
            } else {
                selectedColor = colors[colorIndex - 1];
            }
        } else {
            if (colorIndex + 1 >= colors.length) {
                selectedColor = colors[0];
            } else {
                selectedColor = colors[colorIndex + 1];
            }
        }

        console.log("testando click arrow");

        setDocumentColor(selectedColor as ICanvasPetDocument["documentType"]);
    };

    return (
        <div className="activitiesContainer">
            <ActivityAsidePanel />

            {showImagePreview ? (
                <div
                    className="imagePrevieWrapper"
                    onClick={() => setShowImagePreview(false)}
                >
                    <div
                        className="imagePreviewContainer"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h1>Preview de imagem: </h1>

                        <img
                            src={URL.createObjectURL(file!)}
                            alt="imagePreview"
                        />
                        <div className="rowButtonImagePreview">
                            <button
                                type="button"
                                onClick={() => handleOpenForm()}
                            >
                                <FaRegAddressCard className="imagePreviewIcon" />{" "}
                                Gerar documento
                            </button>

                            <input
                                type="file"
                                className="imagePreviewInput"
                                id="imagePreviewInput"
                                accept=".png,.jpg,.jpeg,.webp"
                                onChange={(event) => handleFileUpload(event)}
                            />
                            <label
                                className="imagePreviewInputLabel"
                                htmlFor="imagePreviewInput"
                            >
                                <FaUpload className="imagePreviewIcon" />
                                Atualizar imagem
                            </label>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}

            {showForm ? (
                <div
                    className="containerFormPetInformation"
                    onClick={() => setShowForm(false)}
                >
                    <form
                        className="formPetInformation"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <label>Informe o nome do pet: </label>
                        <input
                            type="text"
                            placeholder="Brutus..."
                            value={formInformation.petName}
                            onChange={(event) =>
                                dispatchFormInformation({
                                    type: "changePetName",
                                    payload: event.target.value,
                                })
                            }
                        />

                        <label>Informe o sexo do pet: </label>
                        <select
                            value={formInformation.petSex}
                            onChange={(event) =>
                                dispatchFormInformation({
                                    type: "changePetSex",
                                    payload: event.target
                                        .value as ICanvasPetDocumentForm["petSex"],
                                })
                            }
                        >
                            <option value="male">Macho</option>
                            <option value="female">Femea</option>
                        </select>

                        <label>Informe o tipo do pet: </label>
                        <select
                            value={formInformation.animalType}
                            onChange={(event) =>
                                dispatchFormInformation({
                                    type: "changeAnimalType",
                                    payload: event.target
                                        .value as ICanvasPetDocument["animalType"],
                                })
                            }
                        >
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                            <option value="Tartaruga">Tartaruga</option>
                            <option value="Coelho">Coelho</option>
                            <option value="Passaro">Passaro</option>
                            <option value="Hamster">Hamster</option>
                            <option value="Peixe">Peixe</option>
                            <option value="Aranha">Aranha</option>
                            <option value="Outros">Outros</option>
                        </select>

                        <label>Informe a raca do pet: </label>
                        <input
                            type="text"
                            placeholder="Ciames..."
                            value={formInformation.race}
                            onChange={(event) =>
                                dispatchFormInformation({
                                    type: "changeRace",
                                    payload: event.target.value,
                                })
                            }
                        />

                        <label>Informe a data de nascimento do pet: </label>
                        <input
                            type="date"
                            value={formInformation.birthDate}
                            onChange={(event) =>
                                dispatchFormInformation({
                                    type: "changeBirthDate",
                                    payload: event.target.value,
                                })
                            }
                        />

                        <button
                            onClick={() => handleGenerateDocument()}
                            type="button"
                        >
                            Gerar documento
                        </button>
                    </form>
                </div>
            ) : (
                <></>
            )}

            {showGenerationDocument ? (
                <CanvasPetDocument
                    ageDate={formInformation.birthDateFormatted}
                    animalType={formInformation.animalType}
                    petImage={file!}
                    documentType={documentColor}
                    race={formInformation.race}
                    petSex={formInformation.petSex}
                    petName={formInformation.petName}
                    handleChangeDocumentColor={handleChangeDocumentColor}
                    handleCloseDocument={handleCloseDocument}
                />
            ) : (
                <></>
            )}

            <div className="activityContentDocument">
                <span className="documentIntroAnimation">
                    <FaRegAddressCard className="documentIconIntro" />
                    <FaCameraRetro className="cameraIconIntro" />
                </span>
                <h1>Gerador do documento geral da petnet: </h1>
                <h3>
                    Insira a imagem do seu pet para gerar uma imagem
                    <br /> de documento fofinha para seu melhor amigo(a)
                </h3>
                <div className="btnRowContainer">
                    <span>
                        <input
                            type="file"
                            className="picturePetInput"
                            id="picturePetInput"
                            accept=".png,.jpg,.jpeg,.webp"
                            onChange={(event) => handleFileUpload(event)}
                        />
                        <label
                            className="picturePetInputLabel"
                            htmlFor="picturePetInput"
                        >
                            <FaUpload className="uploadLabelIcon" />{" "}
                            {!file
                                ? "Clique aqui e faca o upload"
                                : "Clique para alterar a imagem"}
                        </label>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Activities;
