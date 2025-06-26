import { TAnimalType } from "@petnet/types/animalType.type";

export interface IStatePetRegister {
    logoPetImageFile: File | null;
    animalType: TAnimalType;
    birthDate: "";
    petName: "";
    petSex: "male" | "female";
    race: "";
    // birthDateFormatted: "";
}

export interface IActionPetRegister {
    type:
        | "changeLogoPetImageFile"
        | "changeAnimalType"
        | "changeBirthDate"
        | "changePetName"
        | "changePetSex"
        | "changeRace";
    payload: Date | string | number | File;
}
