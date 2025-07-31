"use client";

import "./newpost.style.css";
import { FaFileImage, FaList, FaTrash, FaUpload } from "react-icons/fa";
import { DragEvent, useState } from "react";
import INewPost from "./newpost.interface";
import { isFileAnImage, isFileAnVideo } from "@petnet/helpers/fileTypeCheck";
import { IoGrid } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { LuFileVideo } from "react-icons/lu";

const NewPost = () => {
    const [uploadSection, setUploadSection] =
        useState<INewPost["uploadSection"]>("unselected");
    const [uploadedFiles, setUploadedFiles] = useState<Array<File>>([]);
    const [previewView, setPreviewView] = useState<"grid" | "list">("grid");

    const handleFileDragglable = (event: DragEvent<HTMLSpanElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;

        if (!files || !files.length) return;
        const filtredFiles = Array.from(files).map((file) => {
            if (isFileAnImage(file) || isFileAnVideo(file)) {
                return file;
            }
        });

        const helperFiles = filtredFiles.filter(
            (file) => file !== null && file !== undefined
        );

        setUploadedFiles([...uploadedFiles, ...helperFiles]);
    };

    const handleSelectFileUpload = (files: FileList | null) => {
        try {
            if (!files || !files.length) return;

            if (!files || !files.length) return;
            const filtredFiles = Array.from(files).map((file) => {
                if (isFileAnImage(file) || isFileAnVideo(file)) {
                    return file;
                }
            });

            const helperFiles = filtredFiles.filter(
                (file) => file !== null && file !== undefined
            );

            setUploadedFiles([...uploadedFiles, ...helperFiles]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="newPostContainer">
            <aside className="asideControls">
                <h1>Como deseja criar o post ?</h1>
                <div className="btnChooseCreatePost">
                    <button type="button">Enviar Arquivo</button>
                    <button type="button">Selecionar da galeria</button>
                </div>

                {uploadedFiles.length ? (
                    <div className="uploadInformations">
                        <h5>Informacoes de upload: </h5>

                        <ul>
                            <li className="listInformationText">
                                <CiFileOn className="iconText" /> Qtd de
                                arquivos: {uploadedFiles.length}
                            </li>
                            <li className="listInformationText">
                                <FaFileImage className="iconText" /> Qtd de
                                imagens: {uploadedFiles.length}
                            </li>
                            <li className="listInformationText">
                                <LuFileVideo className="iconText" /> Qtd de
                                videos: {uploadedFiles.length}
                            </li>
                            <li className="listInformationText">
                                <CiFileOn className="iconText" /> Tamanho total:{" "}
                                {uploadedFiles.length}kb
                            </li>
                            <li className="previewView">
                                <IoGrid />
                                <button
                                    className={`btnSwitchListForm ${
                                        previewView === "grid"
                                            ? "switchGrid"
                                            : "switchList"
                                    }`}
                                    type="button"
                                    onClick={() =>
                                        setPreviewView(
                                            previewView === "grid"
                                                ? "list"
                                                : "grid"
                                        )
                                    }
                                >
                                    <span></span>
                                </button>
                                <FaList />
                            </li>
                            <li>
                                <button type="button">Limpar tudo</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <></>
                )}

                <button type="button" className="btnNext proceed">
                    Avancar
                </button>
            </aside>

            <span>
                <section className="uploadContentWrapper">
                    <h2>Enviar arquivo: </h2>
                    <div
                        className="sendFileContainer"
                        onDrag={(event) => handleFileDragglable(event)}
                        onDragOver={(event) => event.preventDefault()}
                    >
                        <label htmlFor="inputFileUpload">
                            <FaUpload />
                            Faca o upload do arquivo aqui
                        </label>
                        <input
                            type="file"
                            accept="image/*,video/*"
                            id="inputFileUpload"
                            name="inputFileUpload"
                            onChange={(event) =>
                                handleSelectFileUpload(event.target.files)
                            }
                            draggable={true}
                            multiple={true}
                        />
                    </div>
                </section>
                {uploadedFiles.length ? (
                    <div
                        className={
                            previewView === "grid"
                                ? "filesUploadedGrid"
                                : "filesUploadedList"
                        }
                    >
                        <ul>
                            {uploadedFiles.map((file, index) => (
                                <li key={`${file.name}-${index}`}>
                                    <span>
                                        {isFileAnImage(file) ? (
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt={`file: ${file.name}`}
                                            />
                                        ) : (
                                            <video
                                                autoPlay
                                                muted
                                                loop
                                                controls={false}
                                            >
                                                <source
                                                    src={URL.createObjectURL(
                                                        file
                                                    )}
                                                />
                                            </video>
                                        )}
                                        {previewView === "grid" ? (
                                            <></>
                                        ) : (
                                            <p className="itemName">{file.name}</p>
                                        )}
                                    </span>
                                    {previewView === "list" ? (
                                        <FaTrash className="trashCanIcon" />
                                    ) : (
                                        <button type="button">Remover</button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <></>
                )}
            </span>
        </div>
    );
};

export default NewPost;
