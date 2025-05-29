"use client";

import { ChangeEvent, DragEvent, useState } from "react";
import "./gallery.style.css";
import { FaPlus, FaStar, FaTrash } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { IoClose, IoHome } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { LuDog } from "react-icons/lu";
import { useWindowSize } from "@uidotdev/usehooks";

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
        <main className="galleryContainer">
            {width! < 920 && filtersMobile ? (
                <div className="filtersContainer">
                    <span>
                        <h3>Opções: </h3>
                        <ul>
                            <li>
                                <IoHome className="filterIcon" /> Home
                            </li>
                            <li>
                                <TfiReload className="filterIcon" /> Generated
                                pictures
                            </li>
                            <li>
                                <FaStar className="filterIcon" /> Starred
                                pictures
                            </li>
                            <li>
                                <FaTrash className="filterIcon" /> Trashcan
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

            {width! > 920 ? (
                <div className="filtersContainer">
                    <span>
                        <h3>Opções: </h3>
                        <ul>
                            <li>
                                <IoHome className="filterIcon" /> Home
                            </li>
                            <li>
                                <TfiReload className="filterIcon" /> Generated
                                pictures
                            </li>
                            <li>
                                <FaStar className="filterIcon" /> Starred
                                pictures
                            </li>
                            <li>
                                <FaTrash className="filterIcon" /> Trashcan
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

            <div
                className="filtersFloatMobileButton"
                onClick={() => setFiltersMobile(!filtersMobile)}
            >
                <figure>
                    {filtersMobile ? <IoClose /> : <HiPencilSquare />}
                </figure>
            </div>

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
                                Arreste e solte a imagem ou clique para escolher
                                a mesma
                            </h3>
                        </label>
                    </span>
                </div>

                <section className="imageGalleryContainer">
                    <figure>
                        <img src="/assets/catface.jpg" alt="image" />

                        <figcaption>Catface</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/catface.jpg" alt="image" />

                        <figcaption>Catface</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/catface.jpg" alt="image" />

                        <figcaption>Catface</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/catface.jpg" alt="image" />

                        <figcaption>Catface</figcaption>
                    </figure>

                    <figure>
                        <img src="/assets/catface.jpg" alt="image" />

                        <figcaption>Catface</figcaption>
                    </figure>
                </section>
            </div>
        </main>
    );
};

export default Gallery;
