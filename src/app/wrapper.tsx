"use client";

import Navbar from "@petnet/components/navbar";
import useNavbar from "@petnet/hooks/useNavbar";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
    const { navbarShow } = useNavbar();

    return (
        <>
            {navbarShow ? <Navbar /> : <></>}
            {children}
        </>
    );
};

export default Wrapper;
