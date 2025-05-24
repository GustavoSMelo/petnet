import { SiPayloadcms } from "react-icons/si";
import {
    EUltimatesFairy,
    EUltimatesFairyDescription,
    EUltimatesFire,
    EUltimatesFireDescription,
    EUltimatesGhost,
    EUltimatesGhostDescription,
    EUltimatesIce,
    EUltimatesIceDescription,
    EUltimatesPlant,
    EUltimatesPlantDescription,
    EUltimatesShock,
    EUltimatesShockDescription,
    EUltimatesWater,
    EUltimatesWaterDescription,
    ICanvasTCGForm,
} from "./canvasTCG.interface";

type TReducerActionCanvasTCG =
    | {
          type: "changePetName";
          payload: string;
      }
    | {
          type: "changeUltimate";
          payload:
              | EUltimatesFairy
              | EUltimatesFire
              | EUltimatesGhost
              | EUltimatesIce
              | EUltimatesPlant
              | EUltimatesWater
              | EUltimatesShock;
      }
    | {
          type: "changeDef";
          payload: number;
      }
    | {
          type: "changeAtk";
          payload: number;
      }
    | {
          type: "changeMagic";
          payload: number;
      }
    | {
          type: "changeCardType";
          payload: ICanvasTCGForm["cardType"];
      }
    | {
          type: "changeUltimateDescription";
          payload:
              | EUltimatesIceDescription
              | EUltimatesPlantDescription
              | EUltimatesGhostDescription
              | EUltimatesFairyDescription
              | EUltimatesFireDescription
              | EUltimatesShockDescription
              | EUltimatesWaterDescription;
      };

export default TReducerActionCanvasTCG;
