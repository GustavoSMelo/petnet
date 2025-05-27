import {
    EUltimatesFairy,
    EUltimatesFire,
    EUltimatesGhost,
    EUltimatesPlant,
    EUltimatesIce,
    ICanvasTCGForm,
    EUltimatesShock,
    EUltimatesWater,
    EUltimatesFairyDescription,
    EUltimatesFireDescription,
    EUltimatesGhostDescription,
    EUltimatesIceDescription,
    EUltimatesPlantDescription,
    EUltimatesShockDescription,
    EUltimatesWaterDescription,
} from "@petnet/types/canvasTCG.interface";

const generateTCGType = (): ICanvasTCGForm["cardType"] => {
    const numberType = Math.floor(Math.random() * 7);

    switch (numberType) {
        case 0:
            return "Fire";
        case 1:
            return "Plant";
        case 2:
            return "Fairy";
        case 3:
            return "Ghost";
        case 4:
            return "Ice";
        case 5:
            return "Water";
        case 6:
            return "Shock";
        default:
            return "Water";
    }
};

const generateUltimate = (
    petType: ICanvasTCGForm["cardType"]
):
    | EUltimatesFairy
    | EUltimatesFire
    | EUltimatesGhost
    | EUltimatesIce
    | EUltimatesPlant
    | EUltimatesShock
    | EUltimatesWater => {
    const randomNumber = Math.floor(Math.random() * 6);

    switch (petType) {
        case "Fairy":
            return Object.values(EUltimatesFairy)[randomNumber];
        case "Fire":
            return Object.values(EUltimatesFire)[randomNumber];
        case "Ghost":
            return Object.values(EUltimatesGhost)[randomNumber];
        case "Ice":
            return Object.values(EUltimatesIce)[randomNumber];
        case "Plant":
            return Object.values(EUltimatesPlant)[randomNumber];
        case "Shock":
            return Object.values(EUltimatesShock)[randomNumber];
        case "Water":
            return Object.values(EUltimatesWater)[randomNumber];
        default:
            return EUltimatesFairy["Heal"];
    }
};

const generateUltimateDescription = (
    petType: ICanvasTCGForm["cardType"]
):
    | EUltimatesFairyDescription
    | EUltimatesFireDescription
    | EUltimatesGhostDescription
    | EUltimatesIceDescription
    | EUltimatesPlantDescription
    | EUltimatesShockDescription
    | EUltimatesWaterDescription => {
    const randomNumber = Math.floor(Math.random() * 6);

    switch (petType) {
        case "Fairy":
            return Object.values(EUltimatesFairyDescription)[randomNumber];
        case "Fire":
            return Object.values(EUltimatesFireDescription)[randomNumber];
        case "Ghost":
            return Object.values(EUltimatesGhostDescription)[randomNumber];
        case "Ice":
            return Object.values(EUltimatesIceDescription)[randomNumber];
        case "Plant":
            return Object.values(EUltimatesPlantDescription)[randomNumber];
        case "Shock":
            return Object.values(EUltimatesShockDescription)[randomNumber];
        case "Water":
            return Object.values(EUltimatesWaterDescription)[randomNumber];
        default:
            return EUltimatesFairyDescription['Heal'];
    }
};

export { generateTCGType, generateUltimate, generateUltimateDescription };
