/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { ChangeEvent, DragEvent, useState } from "react";
import "./gallery.style.css";
import { FaList, FaPlus, FaStar, FaTrash } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { IoClose, IoGrid, IoHome } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { LuClockArrowUp, LuDog } from "react-icons/lu";
import { useWindowSize } from "@uidotdev/usehooks";
import {
    FaArrowUpWideShort,
    FaArrowUpZA,
    FaRegFloppyDisk,
    FaBoxArchive
} from "react-icons/fa6";
import { MdArchive, MdDelete } from "react-icons/md";
import Footer from "@petnet/components/footer";
import WorrieDog from "@petnetPublic/assets/worrieDog.png";

const Gallery = () => {
    const [filesUploaded, setFilesUploaded] = useState<Array<File>>([]);
    const [filtersMobile, setFiltersMobile] = useState(false);
    const [imageDetailsMobile, setImageDetailsMobile] = useState(false);
    const [listStyle, setListStyle] = useState<"grid" | "list">("grid");
    const { width } = useWindowSize();

    const handleFilesUploaded = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        const fileList = event.target.files;

        if (!fileList) return;
        const tmpFiles = Array.from(fileList).map(
            (fileFromList) => fileFromList
        );

        console.log(tmpFiles);
        setFilesUploaded([...filesUploaded, ...tmpFiles]);
    };

    const handleDrognDrop = (event: DragEvent<HTMLSpanElement>): void => {
        event.preventDefault();

        const fileList = event.dataTransfer.files;

        if (!fileList) return;
        const tmpFiles = Array.from(fileList).map(
            (fileFromList) => fileFromList
        );

        console.log(tmpFiles);
        setFilesUploaded([...filesUploaded, ...tmpFiles]);
    };

    const handleChangeListView = (): void => {
        listStyle === "grid" ? setListStyle("list") : setListStyle("grid");
    };

    return (
        <>
            <main className="galleryContainer">
                {width! < 1040 && filtersMobile ? (
                    <div className="filtersContainer">
                        <span>
                            <h3>Opções: </h3>
                            <ul>
                                <li>
                                    <IoHome className="filterIcon" /> Home
                                </li>
                                <li>
                                    <TfiReload className="filterIcon" />{" "}
                                    Generated pictures
                                </li>
                                <li>
                                    <FaStar className="filterIcon" /> Starred
                                    pictures
                                </li>
                                <li>
                                    <FaTrash className="filterIcon" /> Trashcan
                                </li>
                                <li>
                                    <MdArchive className="filterIcon" />{" "}
                                    Archiveds
                                </li>
                            </ul>

                            <h3 className="menuText">Pets: </h3>
                            <ul>
                                <li>
                                    <LuDog className="filterIcon" /> Brutus
                                </li>
                                <li>
                                    <LuDog className="filterIcon" /> Tom
                                </li>
                                <li>
                                    <LuDog className="filterIcon" /> Jerry
                                </li>
                            </ul>
                        </span>
                    </div>
                ) : (
                    <></>
                )}

                {/* Filters */}

                {width! > 1040 ? (
                    <div className="filtersContainer">
                        <span>
                            <h3>Opções: </h3>
                            <ul>
                                <li>
                                    <IoHome className="filterIcon" /> Home
                                </li>
                                <li>
                                    <TfiReload className="filterIcon" />{" "}
                                    Generated pictures
                                </li>
                                <li>
                                    <FaStar className="filterIcon" /> Starred
                                    pictures
                                </li>
                                <li>
                                    <FaTrash className="filterIcon" /> Trashcan
                                </li>
                                <li>
                                    <MdArchive className="filterIcon" />{" "}
                                    Archiveds
                                </li>
                            </ul>

                            <h3 className="menuText">Pets: </h3>
                            <ul>
                                <li>
                                    <LuDog className="filterIcon" /> Brutus
                                </li>
                                <li>
                                    <LuDog className="filterIcon" /> Tom
                                </li>
                                <li>
                                    <LuDog className="filterIcon" /> Jerry
                                </li>
                            </ul>
                        </span>
                    </div>
                ) : (
                    <></>
                )}

                {width! < 1040 ? (
                    <div
                        className="filtersFloatMobileButton"
                        onClick={() => setFiltersMobile(!filtersMobile)}
                    >
                        <figure>
                            {filtersMobile ? <IoClose /> : <HiPencilSquare />}
                        </figure>
                    </div>
                ) : (
                    <></>
                )}

                {/* gallery content */}

                <div className="contentContainer">
                    <h1>Galeria (Home): </h1>

                    <div className="uploadContainer">
                        <span
                            className="uploadDropzone"
                            onDrop={(event) => handleDrognDrop(event)}
                            onDragOver={(event) => event.preventDefault()}
                        >
                            <input
                                type="file"
                                multiple={true}
                                draggable={true}
                                name="uploadImages"
                                id="uploadImages"
                                className="uploadImages"
                                onChange={(event) => handleFilesUploaded(event)}
                            />
                            <label htmlFor="uploadImages">
                                <FaPlus className="dropzoneIcon" />
                                <h3>
                                    Arreste e solte a imagem ou clique para
                                    escolher a mesma
                                </h3>
                            </label>
                        </span>
                    </div>

                    {filesUploaded.length ? (
                        <section className="uploadedImagesInMem">
                            <span>
                                {filesUploaded.map((files) => (
                                    <img
                                        key={files.name}
                                        src={URL.createObjectURL(files)}
                                        alt={files.name}
                                    />
                                ))}
                            </span>

                            <button
                                type="button"
                                className="btnSaveUplodedFiles"
                            >
                                <FaRegFloppyDisk className="btnIcon" /> Salvar
                            </button>
                        </section>
                    ) : (
                        <></>
                    )}

                    <section className="orderContainer">
                        <div className="orderTools">
                            <h3>
                                Ordernar por:{" "}
                                {width! < 720 && (
                                    <FaArrowUpZA className="iconOrderFilter" />
                                )}
                            </h3>

                            {width! > 720 ? (
                                <span>
                                    <ul>
                                        <li className="selected">
                                            <FaArrowUpZA className="orderToolsIcon" />{" "}
                                            Nome
                                        </li>
                                        <li>
                                            <LuClockArrowUp className="orderToolsIcon" />{" "}
                                            Data de upload
                                        </li>
                                        <li>
                                            <FaArrowUpWideShort className="orderToolsIcon" />{" "}
                                            Tamanho
                                        </li>
                                    </ul>
                                </span>
                            ) : (
                                <select>
                                    <option>Nome</option>
                                    <option>Nome decrescente</option>
                                    <option>Data de upload</option>
                                    <option>Data de upload desc.</option>
                                    <option>Tamanho</option>
                                    <option>Tamanho decrescente</option>
                                </select>
                            )}
                        </div>

                        <div className="orderSwitchView">
                            <IoGrid className="icon" />

                            <button
                                type="button"
                                className={
                                    listStyle === "grid"
                                        ? "gridSelected"
                                        : "listSelected"
                                }
                                onClick={() => handleChangeListView()}
                            >
                                <div />
                            </button>

                            <FaList className="icon" />
                        </div>
                        <div className="orderSwitchViewMobile">
                            <IoGrid className="icon" />
                        </div>
                    </section>

                    {listStyle === "grid" ? (
                        <section className="imageGalleryContainer">
                            <figure>
                                <img src="/assets/catface.jpg" alt="image" />

                                <figcaption>
                                    <div>
                                        <h4>Name: </h4> Catface
                                    </div>
                                    <div>
                                        <h4>Tamaho: </h4> 200KB
                                    </div>
                                    <div>
                                        <h4>Upload: </h4> 10/10/2010
                                    </div>

                                    <span className="btnContainer">
                                        <button
                                            className="btnArchive"
                                            type="button"
                                        >
                                            <MdArchive className="btnIcon" />{" "}
                                            Arquivar
                                        </button>
                                        <button
                                            className="btnDelete"
                                            type="button"
                                        >
                                            <FaTrash className="btnIcon" />{" "}
                                            Deletar
                                        </button>
                                    </span>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="/assets/catface.jpg" alt="image" />

                                <figcaption>
                                    {" "}
                                    <div>
                                        <h4>Name: </h4> Catface
                                    </div>
                                    <div>
                                        <h4>Tamaho: </h4> 200KB
                                    </div>
                                    <div>
                                        <h4>Upload: </h4> 10/10/2010
                                    </div>
                                    <span className="btnContainer">
                                        <button
                                            className="btnArchive"
                                            type="button"
                                        >
                                            <MdArchive className="btnIcon" />{" "}
                                            Arquivar
                                        </button>
                                        <button
                                            className="btnDelete"
                                            type="button"
                                        >
                                            <FaTrash className="btnIcon" />{" "}
                                            Deletar
                                        </button>
                                    </span>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="/assets/catface.jpg" alt="image" />

                                <figcaption>
                                    {" "}
                                    <div>
                                        <h4>Name: </h4> Catface
                                    </div>
                                    <div>
                                        <h4>Tamaho: </h4> 200KB
                                    </div>
                                    <div>
                                        <h4>Upload: </h4> 10/10/2010
                                    </div>
                                    <span className="btnContainer">
                                        <button
                                            className="btnArchive"
                                            type="button"
                                        >
                                            <MdArchive className="btnIcon" />{" "}
                                            Arquivar
                                        </button>
                                        <button
                                            className="btnDelete"
                                            type="button"
                                        >
                                            <FaTrash className="btnIcon" />{" "}
                                            Deletar
                                        </button>
                                    </span>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="/assets/catface.jpg" alt="image" />

                                <figcaption>
                                    {" "}
                                    <div>
                                        <h4>Name: </h4> Catface
                                    </div>
                                    <div>
                                        <h4>Tamaho: </h4> 200KB
                                    </div>
                                    <div>
                                        <h4>Upload: </h4> 10/10/2010
                                    </div>
                                    <span className="btnContainer">
                                        <button
                                            className="btnArchive"
                                            type="button"
                                        >
                                            <MdArchive className="btnIcon" />{" "}
                                            Arquivar
                                        </button>
                                        <button
                                            className="btnDelete"
                                            type="button"
                                        >
                                            <FaTrash className="btnIcon" />{" "}
                                            Deletar
                                        </button>
                                    </span>
                                </figcaption>
                            </figure>

                            <figure>
                                <img src="/assets/catface.jpg" alt="image" />

                                <figcaption>
                                    {" "}
                                    <div>
                                        <h4>Name: </h4> Catface
                                    </div>
                                    <div>
                                        <h4>Tamaho: </h4> 200KB
                                    </div>
                                    <div>
                                        <h4>Upload: </h4> 10/10/2010
                                    </div>
                                    <span className="btnContainer">
                                        <button
                                            className="btnArchive"
                                            type="button"
                                        >
                                            <MdArchive className="btnIcon" />{" "}
                                            Arquivar
                                        </button>
                                        <button
                                            className="btnDelete"
                                            type="button"
                                        >
                                            <FaTrash className="btnIcon" />{" "}
                                            Deletar
                                        </button>
                                    </span>
                                </figcaption>
                            </figure>
                        </section>
                    ) : (
                        <section className="imageGalleryContainerList">
                            {width! < 590 ? (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Arquivos: </th>
                                            <th>Acoes: </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="tableFigureData">
                                                <img
                                                    src="/assets/catface.jpg"
                                                    alt="image"
                                                />
                                                <h3>Catface</h3>
                                            </td>
                                            <td
                                                onClick={() =>
                                                    setImageDetailsMobile(true)
                                                }
                                            >
                                                <BsThreeDots />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Arquivo: </th>
                                            <th>Data: </th>
                                            <th>Tamanho: </th>
                                            <th>Acoes: </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="tableFigureData">
                                                <img
                                                    src="/assets/catface.jpg"
                                                    alt="image"
                                                />
                                                <h3>Catface</h3>
                                            </td>
                                            <td>200KB</td>
                                            <td>10/10/2010</td>
                                            <td className="tableActionData">
                                                <button
                                                    className="btnArchive"
                                                    type="button"
                                                >
                                                    <FaBoxArchive className="btnIcon" />{" "}
                                                </button>
                                                <button
                                                    className="btnDelete"
                                                    type="button"
                                                >
                                                    <FaTrash className="btnIcon" />{" "}
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tableFigureData">
                                                <img
                                                    src="/assets/catface.jpg"
                                                    alt="image"
                                                />
                                                <h3>Catface</h3>
                                            </td>
                                            <td>200KB</td>
                                            <td>10/10/2010</td>
                                            <td className="tableActionData">
                                                <button
                                                    className="btnStar"
                                                    type="button"
                                                >
                                                    <FaStar className="btnIcon" />{" "}
                                                </button>
                                                <button
                                                    className="btnArchive"
                                                    type="button"
                                                >
                                                    <FaBoxArchive className="btnIcon" />{" "}
                                                </button>
                                                <button
                                                    className="btnDelete"
                                                    type="button"
                                                >
                                                    <FaTrash className="btnIcon" />{" "}
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </section>
                    )}

                    {/* <figure className="notFoundDog">
                        <img
                            className=""
                            src={WorrieDog.src}
                            alt="worried dog"
                        />
                        <figcaption>
                            Nenhuma imagem foi <br />
                            encontrada no momento
                            <br />
                        </figcaption>
                    </figure> */}
                </div>

                {/* Full image info */}

                {width! < 590 && imageDetailsMobile ? (
                    <span
                        className="imageDetailsMobile"
                        onClick={() => setImageDetailsMobile(false)}
                    >
                        <div onClick={(event) => event.stopPropagation()}>
                            <h3>Imagen.png</h3>

                            <ul>
                                <li className="btnFav">
                                    <FaStar /> Favoritar
                                </li>
                                <li className="infoText">
                                    <b>Tamanho:</b> 300KB
                                </li>
                                <li className="infoText">
                                    <b>Resolucao:</b> 600x600
                                </li>
                                <li className="infoText">
                                    <b>Upload:</b> 10/10/2002
                                </li>
                                <li className="btnArchive">
                                    <MdArchive /> Arquivar
                                </li>
                                <li className="btnDelete">
                                    <MdDelete />
                                    Deletar
                                </li>
                            </ul>
                        </div>
                    </span>
                ) : (
                    <></>
                )}

            </main>
            <Footer />
        </>
    );
};

export default Gallery;
