import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TActivityRouting = {
    currentActivityRoute: "Initial" | "GenDoc" | "RPGGen" | "TCG";
    changeActivityRoute: (
        route: TActivityRouting["currentActivityRoute"]
    ) => void;
};

const useActivityRouting = create<TActivityRouting>()(
    persist(
        (set) => ({
            currentActivityRoute: "Initial",
            changeActivityRoute: (
                route: TActivityRouting["currentActivityRoute"]
            ) => set({ currentActivityRoute: route }),
        }),
        {
            name: "activity-routing-store",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useActivityRouting;
