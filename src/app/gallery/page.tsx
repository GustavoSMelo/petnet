"use client";

import { ChangeEvent, DragEvent, useState } from "react";
import "./gallery.style.css";
import { FaList, FaPlus, FaStar, FaTrash } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { IoClose, IoGrid, IoHome } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { LuClockArrowUp, LuDog } from "react-icons/lu";
import { useWindowSize } from "@uidotdev/usehooks";
import { FaArrowUpWideShort, FaArrowUpZA, FaBoxArchive } from "react-icons/fa6";
import { MdArchive } from "react-icons/md";
import Footer from "@petnet/components/footer";

const Gallery = () => {
    const [filesUploaded, setFilesUploaded] = useState<Array<File>>([]);
    const [filtersMobile, setFiltersMobile] = useState(false);
    const { width } = useWindowSize();

    const handleFilesUploaded = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (!fileList) return;
        const tmpFiles = Array.from(fileList).map(
            (fileFromList) => fileFromList
        );

        console.log(tmpFiles);
        setFilesUploaded([...filesUploaded, ...tmpFiles]);
    };

    const handleDrognDrop = (event: DragEvent<HTMLSpanElement>) => {
        event.preventDefault();

        const fileList = event.dataTransfer.files;

        if (!fileList) return;
        const tmpFiles = Array.from(fileList).map(
            (fileFromList) => fileFromList
        );

        console.log(tmpFiles);
        setFilesUploaded([...filesUploaded, ...tmpFiles]);
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

                            <button type="button">
                                <div />
                            </button>

                            <FaList className="icon" />
                        </div>
                        <div className="orderSwitchViewMobile">
                            <IoGrid className="icon" />
                        </div>
                    </section>

                    {/* <section className="imageGalleryContainer">
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
                                    <button className="btnDelete" type="button">
                                        <FaTrash className="btnIcon" /> Deletar
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
                                    <button className="btnDelete" type="button">
                                        <FaTrash className="btnIcon" /> Deletar
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
                                    <button className="btnDelete" type="button">
                                        <FaTrash className="btnIcon" /> Deletar
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
                                    <button className="btnDelete" type="button">
                                        <FaTrash className="btnIcon" /> Deletar
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
                                    <button className="btnDelete" type="button">
                                        <FaTrash className="btnIcon" /> Deletar
                                    </button>
                                </span>
                            </figcaption>
                        </figure>
                    </section> */}

                    <section className="imageGalleryContainerList">
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
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Gallery;
