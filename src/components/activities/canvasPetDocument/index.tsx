import { useEffect, useRef } from "react";
import './canvasPetDocument.style.css';

const CanvasPetDocument = () => {
    const canvasRef = useRef(null);

        useEffect(() => {
            const canvas = canvasRef.current;

            const documentImage = new Image();
            const dogImage = new Image(200, 300);

            documentImage.src = "/assets/Ids/Identidade_Green.png";
            dogImage.src = "/assets/catface.jpg";

            documentImage.style.zIndex = '1';
            dogImage.style.zIndex = '2';

            dogImage.style.borderRadius = "30px";

            documentImage.addEventListener("load", () => {
                canvas.width = documentImage.width;
                canvas.height = documentImage.height;
                const canvasContext = canvas.getContext('2d');
                canvasContext.drawImage(documentImage, 0, 0);
                canvasContext.save();

                dogImage.addEventListener("load", () => {

                  console.log(dogImage);
                  canvasContext.drawImage(dogImage, 162, 160, 320, 280);

                  canvasContext.font = '47px Fredoka';

                  canvasContext.fillText("jao", 685, 165);
                  canvasContext.fillText("PetSex", 920, 465);
                  canvasContext.fillText("PetRace", 920, 565);
                  canvasContext.fillText("PetType", 1035, 660);
                  canvasContext.fillText("DD/MM/YYYY (20)", 940, 755);
                  canvasContext.fillText("Documento gerado pela plataforma petnet", 300, 835);

                  canvasContext.save();
                });
              });

        }, []);

    return (
        <div className="canvasPetDocumentContainer">
            <canvas
                id="documentGeneration"
                className="documentGeneration"
                ref={canvasRef}
            ></canvas>
            <button type="button" className="btnDownloadDocument">
                Baixar document
            </button>
        </div>
    );
};

export default CanvasPetDocument;
