interface ICanvasTCG {
    petName: string;
    ultimate: string;
    def: number;
    atk: number;
    magic: number;
}

interface ICanvasTCGForm extends ICanvasTCG {
    cardType: "Water" | "Fire" | "Plant" | "Shock" | "Ghost" | "Fairy" | "Ice";
}

export { type ICanvasTCG, type ICanvasTCGForm };
