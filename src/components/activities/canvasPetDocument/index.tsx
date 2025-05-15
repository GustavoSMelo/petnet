import { useEffect, useRef } from "react";
import "./canvasPetDocument.style.css";
import { ICanvasPetDocumentComponent } from "@petnet/types/canvasPetDocument.interface";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const CanvasPetDocument = ({
    ageDate,
    animalType,
    petName,
    petSex,
    race,
    documentType = "Blue",
    petImage,
    handleChangeDocumentColor,
    handleCloseDocument,
}: ICanvasPetDocumentComponent) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const loadCanvas = async () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const documentImage = new Image();
        const canvasPetImage = new Image(200, 300);

        documentImage.src = `/assets/Ids/Identidade_${documentType}.png`;
        canvasPetImage.src = URL.createObjectURL(petImage);

        const mainPromise = new Promise(() => {
            documentImage.addEventListener("load", () => {
                canvas.width = documentImage.width;
                canvas.height = documentImage.height;
                const canvasContext = canvas.getContext("2d");

                if(!canvasContext) return;

                canvasContext.drawImage(documentImage, 0, 0);

                canvasContext.font = "32px Verdana";
                canvasContext.fillStyle =
                    documentType === "Brown" ? "white" : "black";

                canvasContext.fillText(petName, 665, 180);
                canvasContext.fillText(petSex, 660, 236);
                canvasContext.fillText(race, 660, 295);
                canvasContext.fillText(animalType, 710, 350);
                canvasContext.fillText(ageDate, 670, 400);
                canvasContext.save();

                canvasContext.drawImage(canvasPetImage, 162, 160, 320, 280);
                canvasContext.save();

                canvasPetImage.addEventListener("load", () => {
                    canvasContext.drawImage(canvasPetImage, 162, 160, 320, 280);

                    canvasContext.save();
                });
            });
        });

        await Promise.all([mainPromise]);
    };

    useEffect(() => {
        loadCanvas();
    }, [documentType]);

    const handleDownloadDocument = () => {
        const a = window.document.createElement("a");

        if (canvasRef.current) {
            a.href = canvasRef.current.toDataURL();
            a.download = "petnetDocumento";
            window.document.body.appendChild(a);
            a.click();
            window.document.body.removeChild(a);
        }
    };

    return (
        <div
            className="canvasPetDocumentContainer"
            onClick={() => handleCloseDocument()}
        >
            <canvas
                id="documentGeneration"
                className="documentGeneration"
                ref={canvasRef}
            ></canvas>
            <span
                className="btnContainer"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="btnPreviousNextCard"
                    onClick={() => handleChangeDocumentColor("previous")}
                >
                    <MdOutlineKeyboardArrowLeft />
                </button>
                <button
                    onClick={() => handleDownloadDocument()}
                    type="button"
                    className="btnDownloadDocument"
                >
                    <IoMdDownload className="downloadIcon" /> Download
                </button>
                <button
                    type="button"
                    className="btnPreviousNextCard"
                    onClick={() => handleChangeDocumentColor("next")}
                >
                    <MdOutlineKeyboardArrowRight />
                </button>
            </span>
        </div>
    );
};

export default CanvasPetDocument;
