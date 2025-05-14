import './canvastcg.style.css';
import { useEffect, useRef } from "react";

const CanvasTCG = () => {
    const canvasRef = useRef(null);

    const loadCanvas = async () => {
        const canvas = canvasRef.current;

        const cardStyle = new Image();
        const canvasPetImage = new Image();

        cardStyle.src = "/assets/cards/cardIce.png";
        canvasPetImage.src = "/assets/catface.png";

        const mainPromise = new Promise(() => {
            cardStyle.addEventListener("load", () => {
                canvas.width = cardStyle.width;
                canvas.height = cardStyle.height;
                const canvasContext = canvas.getContext("2d");
                canvasContext.drawImage(cardStyle, 0, 0);

                canvasContext.font = "32px Verdana";

                canvasContext.fillText("teste", 0, 0);
                canvasContext.fillText("teste2", 660, 236);
                canvasContext.fillText("teste3", 660, 295);
                canvasContext.fillText("teste4", 710, 350);
                canvasContext.fillText("teste5", 670, 400);
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
    }, []);

    return (
        <div className="canvasTCGContainer">
            <canvas className="canvasTCG" ref={canvasRef}></canvas>
        </div>
    );
};

export default CanvasTCG;
