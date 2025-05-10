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
    documentType: "Blue" | "Pink" | "Brown" | "Green";
    petImage: string;
}

interface ICanvasPetDocumentForm {
    petName: string;
    petSex: "male" | "female";
    animalType: ICanvasPetDocument["animalType"];
    race: string;
    birthDate: string;
}

export { type ICanvasPetDocument, type ICanvasPetDocumentForm };
