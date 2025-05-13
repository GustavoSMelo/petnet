"use client";

import "./activities.style.css";
import ActivityAsidePanel from "@petnet/components/activities/asidePanel";
import ActivityParty from "@petnetPublic/assets/illustrations/cartoon/ActivityParty.png";

const Activities = () => {
    return (
        <div className="hubActivityPages">
            <ActivityAsidePanel />

            <span className="introText">
                <img src={ActivityParty.src} alt="ActivityPartyImage" />
                <h1>
                    Seja Bem vindo ao <br />
                    Hub de atividades
                </h1>
                <p>Escolha sua atividade no menu para iniciar sua diversao</p>
            </span>
        </div>
    );
};

export default Activities;
