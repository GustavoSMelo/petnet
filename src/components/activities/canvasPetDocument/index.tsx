import { useEffect, useRef } from "react";
import "./canvasPetDocument.style.css";
import { ICanvasPetDocument } from "@petnet/types/canvasPetDocument.interface";
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
}: ICanvasPetDocument) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        const documentImage = new Image();
        const canvasPetImage = new Image(200, 300);

        documentImage.src = `/assets/Ids/Identidade_${documentType}.png`;
        canvasPetImage.src = petImage;

        documentImage.style.zIndex = "1";
        canvasPetImage.style.zIndex = "2";

        canvasPetImage.style.borderRadius = "30px";

        documentImage.addEventListener("load", () => {
            canvas.width = documentImage.width;
            canvas.height = documentImage.height;
            const canvasContext = canvas.getContext("2d");
            canvasContext.drawImage(documentImage, 0, 0);
            canvasContext.save();

            canvasPetImage.addEventListener("load", () => {
                console.log(canvasPetImage);
                canvasContext.drawImage(canvasPetImage, 162, 160, 320, 280);

                canvasContext.font = "32px Verdana";

                if (documentType === "Brown") {
                    canvasContext.fillStyle = "white";
                }

                canvasContext.fillText(petName, 665, 180);
                canvasContext.fillText(petSex, 660, 236);
                canvasContext.fillText(race, 660, 295);
                canvasContext.fillText(animalType, 710, 350);
                canvasContext.fillText(ageDate, 670, 400);

                canvasContext.save();
            });
        });
    }, []);

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
        <div className="canvasPetDocumentContainer">
            <canvas
                id="documentGeneration"
                className="documentGeneration"
                ref={canvasRef}
            ></canvas>
            <span className="btnContainer">
                <button type="button" className="btnPreviousNextCard">
                    <MdOutlineKeyboardArrowLeft />
                </button>
                <button
                    onClick={() => handleDownloadDocument()}
                    type="button"
                    className="btnDownloadDocument"
                >
                    <IoMdDownload className="downloadIcon" /> Download
                </button>
                <button type="button" className="btnPreviousNextCard">
                    <MdOutlineKeyboardArrowRight />
                </button>
            </span>
        </div>
    );
};

export default CanvasPetDocument;
