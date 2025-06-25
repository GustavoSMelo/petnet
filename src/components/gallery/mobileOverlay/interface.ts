import { Dispatch, SetStateAction } from "react";

export interface IMobileOverlay {
    imagePath: string;
    imageDetailsMobileExpanded: boolean;
    setImageDetailsMobile: Dispatch<SetStateAction<boolean>>;
    setImageDetailsMobileExpanded: Dispatch<SetStateAction<boolean>>
}
