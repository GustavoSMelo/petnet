"use client";

import { FaRegAddressCard, FaUpload } from "react-icons/fa";
import "./activities.style.css";

import ActivityAsidePanel from "@petnet/components/activities/asidePanel";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import CanvasPetDocument from "@petnet/components/activities/canvasPetDocument";

const Activities = () => {
    const [file, setFile] = useState<File | null>(null);
    const [generateDocument, setGenerateDocument] = useState(false);
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

            <CanvasPetDocument />

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
