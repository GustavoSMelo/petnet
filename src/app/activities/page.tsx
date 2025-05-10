"use client";

import { FaRegAddressCard, FaUpload } from "react-icons/fa";
import "./activities.style.css";

import ActivityAsidePanel from "@petnet/components/activities/asidePanel";
import { ChangeEvent, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import CanvasPetDocument from "@petnet/components/activities/canvasPetDocument";
import PetFace from "@petnetPublic/assets/catface.jpg";
import { ICanvasPetDocumentForm } from "@petnet/types/canvasPetDocument.interface";
import { TReducerActionCanvasPetDocument } from "@petnet/types/reducerActionCanvasPetDocument.type";

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
            case "petName":
                return {
                    ...state,
                    petName: action.payload,
                } as ICanvasPetDocumentForm;
            case "petSex":
                return {
                    ...state,
                    petSex: action.payload,
                } as ICanvasPetDocumentForm;
            case "race":
                return {
                    ...state,
                    race: action.payload,
                } as ICanvasPetDocumentForm;
        }
    };

    const [file, setFile] = useState<File | null>(null);
    const [generateDocument, setGenerateDocument] = useState(false);
    const [formInformation, setFormInformation] = useReducer(formReducer, {
        animalType: "Outros",
        birthDate: "",
        petName: "",
        petSex: "male",
        race: "",
    });
    const router = useRouter();

    const handleGenerateDocumentClick = () => {};

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
        <div className="activitiesContainer">
            <ActivityAsidePanel />

            <div className="containerFormPetInformation">
                <form className="formPetInformation">
                    <label>Informe o nome do pet: </label>
                    <input type="text" placeholder="Brutus..." />

                    <label>Informe o sexo do pet: </label>
                    <select>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>

                    <label>Informe o tipo do pet: </label>
                    <select>
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

                    <label>Informe o tipo do pet: </label>
                    <input type="text" placeholder="Ciames..." />

                    <label>Informe a data de nascimento do pet: </label>
                    <input type="date" />

                    <button type="button">Gerar documento</button>
                </form>
            </div>

            {/* <CanvasPetDocument
                ageDate="10/10/2010"
                animalType="Cachorro"
                petImage={PetFace.src}
                documentType="Pink"
                race="Nao sei"
                petSex="female"
                petName="jjujuba"
            /> */}

            <div className="activityContentDocument">
                <h1>Gerador do documento geral da petnet: </h1>
                <h3>
                    Insira a imagem do seu pet para gerar uma imagem de
                    documento fofinha para seu melhor amigo(a)
                </h3>

                {file ? (
                    <img
                        className="imgPreview"
                        src={URL.createObjectURL(file)}
                    />
                ) : (
                    <></>
                )}

                <div className="btnRowContainer">
                    <button
                        type="button"
                        className={
                            file
                                ? "btnGenerateDocument"
                                : "btnGenerateDocumentBlocked"
                        }
                        onClick={() => router.push("/activities/gendocument")}
                    >
                        <FaRegAddressCard className="btnGenerateDocumentIcon" />{" "}
                        Gerar documento
                    </button>

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
