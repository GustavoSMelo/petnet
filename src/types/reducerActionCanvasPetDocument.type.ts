import { ICanvasPetDocument } from "./canvasPetDocument.interface"

type TReducerActionCanvasPetDocument = {
    type: 'changeAnimalType',
    payload: ICanvasPetDocument['animalType']
} | {
    type: 'changeBirthDate',
    payload: string,
} | {
    type: 'petName',
    payload: string,
} | {
    type: 'petSex',
    payload: ICanvasPetDocument['petSex']
} | {
    type: 'race',
    payload: string
}

export type { TReducerActionCanvasPetDocument };
