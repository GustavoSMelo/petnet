import "./canvastcg.style.css";
import { useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { ICanvasTCGForm } from "@petnet/types/canvasTCG.interface";

const CanvasTCG = ({
    atk,
    cardType,
    def,
    magic,
    petName,
    ultimate,
    ultimateDescription,
    imagePath,
}: ICanvasTCGForm) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const loadCanvas = async () => {
        const canvas = canvasRef.current;

        if (canvas === null) return;
        const cardStyle = new Image();
        const canvasPetImage = new Image();

        cardStyle.src = `/assets/cards/card${cardType}.png`;
        canvasPetImage.src = imagePath;

        const mainPromise = new Promise(() => {
            cardStyle.addEventListener("load", () => {
                canvas.width = cardStyle.width;
                canvas.height = cardStyle.height;
                const canvasContext = canvas.getContext("2d");

                if (!canvasContext) return;

                canvasContext.drawImage(cardStyle, 0, 0);

                canvasContext.font = "32px Verdana";

                console.log("teste de canvas");

                canvasContext.fillText(petName, 40, 53);
                canvasContext.fillText(ultimate, 160, 385);

                canvasContext.font = "16px Verdana";

                console.log(
                    atk,
                    cardType,
                    def,
                    magic,
                    petName,
                    ultimate,
                    ultimateDescription
                );

                const splittedText = ultimateDescription.split("\n");

                canvasContext.fillText(splittedText[0].toString(), 160, 420);
                canvasContext.fillText(splittedText[1].toString(), 160, 440);
                canvasContext.fillText(splittedText[2].toString(), 160, 460);

                canvasContext.font = "46px Verdana";

                canvasContext.fillText(
                    atk.toString().length === 1 ? `0${atk}` : atk.toString(),
                    57,
                    560
                );
                canvasContext.fillText(
                    def.toString().length === 1 ? `0${def}` : def.toString(),
                    205,
                    560
                );
                canvasContext.fillText(
                    magic.toString().length === 1
                        ? `0${magic}`
                        : magic.toString(),
                    350,
                    560
                );
                canvasContext.save();

                canvasContext.drawImage(canvasPetImage, 32, 75, 400, 260);
                canvasContext.save();

                canvasPetImage.addEventListener("load", () => {
                    canvasContext.drawImage(canvasPetImage, 32, 75, 400, 260);

                    canvasContext.save();
                });
            });
        });

        await Promise.all([mainPromise]);
    };

    const handleDownloadTCG = () => {
        const anchor = window.document.createElement("a");

        if (canvasRef.current) {
            anchor.href = canvasRef.current.toDataURL();
            anchor.download = "petTCG";

            window.document.appendChild(anchor);
            anchor.click();
            window.document.removeChild(anchor);
        }
    };

    useEffect(() => {
        loadCanvas();
    }, []);

    return (
        <div className="canvasTCGContainer">
            <canvas className="canvasTCG" ref={canvasRef}></canvas>
            <button type="button" onClick={() => handleDownloadTCG()}>
                <FiDownload className="btnIcon" /> Download
            </button>
        </div>
    );
};

export default CanvasTCG;
