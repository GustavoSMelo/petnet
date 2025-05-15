import { ICanvasTCGForm } from "./canvasTCG.interface";

type TReducerActionCanvasTCG =
    | {
          type: "changePetName";
          payload: string;
      }
    | {
          type: "changeUltimate";
          payload: string;
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
      };

export default TReducerActionCanvasTCG;
