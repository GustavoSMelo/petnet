import { ICanvasPetDocument } from "./canvasPetDocument.interface";

type TReducerActionCanvasPetDocument =
    | {
          type: "changeAnimalType";
          payload: ICanvasPetDocument["animalType"];
      }
    | {
          type: "changeBirthDate";
          payload: string;
      }
    | {
          type: "changePetName";
          payload: string;
      }
    | {
          type: "changePetSex";
          payload: ICanvasPetDocument["petSex"];
      }
    | {
          type: "changeRace";
          payload: string;
      }
    | {
          type: "changeDateFormatted";
          payload: string;
      };

export type { TReducerActionCanvasPetDocument };
