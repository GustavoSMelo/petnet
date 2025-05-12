interface ICanvasPetDocument {
    petName: string;
    petSex: "male" | "female";
    animalType:
        | "Cachorro"
        | "Gato"
        | "Tartaruga"
        | "Coelho"
        | "Passaro"
        | "Hamster"
        | "Peixe"
        | "Aranha"
        | "Outros";
    race: string;
    ageDate: string;
    documentType: "Blue" | "Pink" | "Brown" | "Green" | "Purple";
    petImage: File;
}

interface ICanvasPetDocumentComponent extends ICanvasPetDocument {
    handleChangeDocumentColor: (isPreviousOrNextColor: 'previous' | 'next') => void;
}

interface ICanvasPetDocumentForm {
    petName: string;
    petSex: "male" | "female";
    animalType: ICanvasPetDocument["animalType"];
    race: string;
    birthDate: string;
    birthDateFormatted: string;
}

export {
    type ICanvasPetDocument,
    type ICanvasPetDocumentForm,
    type ICanvasPetDocumentComponent,
};
