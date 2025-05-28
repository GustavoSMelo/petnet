import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TNavbar = {
    navbarShow: boolean,
    changeNavbarShow: (navbarParams: boolean) => void
};

const useNavbar = create<TNavbar>()(
    persist(
        (set) => ({
            navbarShow: false,
            changeNavbarShow: (navbarParams: boolean) => set({ navbarShow: navbarParams }),
        }),
        {
            name: 'navbar-show',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

export default useNavbar;
