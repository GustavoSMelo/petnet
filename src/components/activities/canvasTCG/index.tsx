import "./canvastcg.style.css";
import { useEffect, useRef } from "react";

const CanvasTCG = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const loadCanvas = async () => {
        const canvas = canvasRef.current;

        if (canvas === null) return;
        const cardStyle = new Image();
        const canvasPetImage = new Image();

        cardStyle.src = "/assets/cards/cardIce.png";
        canvasPetImage.src = "/assets/catface.jpg";

        const mainPromise = new Promise(() => {
            cardStyle.addEventListener("load", () => {
                canvas.width = cardStyle.width;
                canvas.height = cardStyle.height;
                const canvasContext = canvas.getContext("2d");

                if (!canvasContext) return;

                canvasContext.drawImage(cardStyle, 0, 0);


                canvasContext.font = "32px Verdana";

                console.log("teste de canvas");

                canvasContext.fillText("teste", 40, 53);
                canvasContext.fillText("Blizzard", 160, 385);

                canvasContext.font = "16px Verdana";
                canvasContext.fillText(
                    `Grande ataque de gelo onde o pet  \n
                    `,
                    160,
                    420
                );
                canvasContext.fillText(`nao deixa fazer carinho,`, 160, 440);
                canvasContext.fillText(
                    `causando um dano imenso de gelo`,
                    160,
                    460
                );

                canvasContext.font = "46px Verdana";

                canvasContext.fillText("20", 57, 560);
                canvasContext.fillText("12", 205, 560);
                canvasContext.fillText("05", 350, 560);
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
