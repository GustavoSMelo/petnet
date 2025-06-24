"use client";

import { MdArchive } from "react-icons/md";
import "./overlay.style.css";
import Catface from "@petnetPublic/assets/catface.jpg";
import { FaDownload, FaStar, FaTrash } from "react-icons/fa";

const Overlay = () => {
    return (
        <div className="overlayContainer">
            <figure>
                <img src={Catface.src} alt="figure" />

                <figcaption className="imageInformations">
                    <ul>
                        <li>
                            <b>Nome: </b> ImageName.png
                        </li>
                        <li>
                            <b>Tipo: </b> image/png
                        </li>
                        <li>
                            <b>Resolucao: </b> 200 x 200
                        </li>
                        <li>
                            <b>Tamanho: </b> 200kb
                        </li>
                        <li>
                            <b>Upload: </b> 10/10/2001
                        </li>
                        <li>
                            <b>Criacao: </b> 10/10/2000
                        </li>
                        <li>
                            <b>Localizacao: </b> Sem localizacao
                        </li>
                        <li>
                            <b>Arquivado: </b> -
                        </li>

                        <span className="btnControls">
                            <button className="btnDownload" type="button"><FaDownload /></button>
                            <button className="btnFav" type="button"><FaStar /> </button>
                            <button className="btnArchive" type="button"><MdArchive /></button>
                            <button className="btnRemove" type="button"><FaTrash /></button>
                        </span>
                    </ul>
                </figcaption>
            </figure>
        </div>
    );
};

export default Overlay;
