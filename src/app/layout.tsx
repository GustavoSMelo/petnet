import "../styles/globals.css";
import type { Metadata } from "next";
import Wrapper from "./wrapper";

export const metadata: Metadata = {
    title: "Petnet",
    description: "petnet",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                <Wrapper>
                    {children}
                </Wrapper>
            </body>
        </html>
    );
}
