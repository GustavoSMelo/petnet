"use client";

import { FaUpload } from "react-icons/fa6";
import "./gentcg.style.css";
import ActivityAsidePanel from "@petnet/components/activities/asidePanel";
import { ChangeEvent, useState } from "react";
import CanvasTCG from "@petnet/components/activities/canvasTCG";

const GenTCG = () => {
    const [file, setFile] = useState<File>();

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || !files.length) return;

        const tmpFile: File = files[0];

        if (tmpFile) {
            if (
                tmpFile.type !== "image/png" &&
                tmpFile.type !== "image/jpg" &&
                tmpFile.type !== "image/jpeg" &&
                tmpFile.type !== "image/webp"
            ) {
                return;
            }

            console.log(tmpFile);
            setFile(tmpFile);
        }
    };

    return (
        <div className="TCGeneratorContainer">
            <ActivityAsidePanel />
            <div className="cardGenerated">
                <span>
                    <CanvasTCG />
                </span>
            </div>
            <div className="generationContainer">
                <form>
                    <label>Pet image: </label>
                    <span className="fileContainer">
                        <input
                            type="file"
                            className="petPictureLabel"
                            id="petPictureLabel"
                            accept=".png,.jpg,.jpeg,.webp"
                            onChange={(event) => handleFileUpload(event)}
                        />
                        <label
                            className="petPictureLabel"
                            htmlFor="petPictureLabel"
                        >
                            <FaUpload className="uploadLabelIcon" />
                            Clique para fazer o upload
                        </label>
                    </span>

                    <label>Pet name: </label>
                    <input name="petName" placeholder="Brutus... " />

                    <label>Card type: </label>
                    <select className="cardType">
                        <option>💧 Agua</option>
                        <option>🔥 Fogo</option>
                        <option>🍂 Planta</option>
                        <option>❄️ Gelo</option>
                        <option>⚡ Shock</option>
                        <option>🎃 Fantasma</option>
                        <option>🧁 Fada</option>
                    </select>

                    <label>Ultimate: </label>
                    <select className="ultimateOptions">
                        <option>Bola de fogo</option>
                        <option>Bola de fogo</option>
                        <option>Bola de fogo</option>
                    </select>

                    <button type="button" className="btnGenerateCard">
                        Gerar card
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GenTCG;
