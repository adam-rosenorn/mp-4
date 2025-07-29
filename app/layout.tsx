import React from "react";
import {StyledBody} from "@/lib/styled";
import Header from "@/components/Header";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "MP-3 | CS392",
    description: "See the top scorers and assist makers in the Danish Superliga",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <StyledBody>
                <Header/>
                {children}
            </StyledBody>
        </html>
    );
}