"use client";

import { FaDownload, FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdArchive, MdDelete } from "react-icons/md";
import { IMobileOverlay } from "./interface";

const MobileOverlay = ({
    imagePath,
    imageDetailsMobileExpanded,
    setImageDetailsMobile,
    setImageDetailsMobileExpanded,
}: IMobileOverlay) => {
    return (
        <div
            className="imageDetailsMobile"
            onClick={() => setImageDetailsMobile(false)}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className={
                    imageDetailsMobileExpanded
                        ? "imageDetailsMobileExpanded"
                        : ""
                }
            >
                <button
                    className="expandDetails"
                    onClick={() =>
                        setImageDetailsMobileExpanded(
                            !imageDetailsMobileExpanded
                        )
                    }
                >
                    {imageDetailsMobileExpanded ? (
                        <IoIosArrowDown className="expandDetailsIcon" />
                    ) : (
                        <IoIosArrowUp className="expandDetailsIcon" />
                    )}
                </button>
                <h3>Imagen.png</h3>

                {imageDetailsMobileExpanded ? (
                    <img
                        className="imageSourceDetails"
                        src={imagePath}
                        alt="imageDetailMobile"
                    />
                ) : (
                    <></>
                )}

                <ul>
                    <li className="info-text">
                        <b>Nome: </b> ImageName.png
                    </li>
                    <li className="info-text">
                        <b>Tipo: </b> image/png
                    </li>
                    <li className="info-text">
                        <b>Resolucao: </b> 200 x 200
                    </li>
                    {imageDetailsMobileExpanded ? (
                        <>
                            <li className="info-text">
                                <b>Tamanho: </b> 200kb
                            </li>
                            <li className="info-text">
                                <b>Upload: </b> 10/10/2001
                            </li>
                            <li className="info-text">
                                <b>Criacao: </b> 10/10/2000
                            </li>
                            <li className="info-text">
                                <b>Localizacao: </b> Sem localizacao
                            </li>
                            <li className="info-text">
                                <b>Arquivado: </b> -
                            </li>
                        </>
                    ) : (
                        <></>
                    )}
                    <li className="btnDownload">
                        <FaDownload /> Download
                    </li>
                    <li className="btnFav">
                        <FaStar /> Favoritar
                    </li>
                    <li className="btnArchive">
                        <MdArchive /> Arquivar
                    </li>
                    {imageDetailsMobileExpanded ? (
                        <li className="btnDelete">
                            <MdDelete />
                            Deletar
                        </li>
                    ) : (
                        <></>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MobileOverlay;
