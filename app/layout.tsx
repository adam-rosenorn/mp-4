import React from "react";
import {StyledBody} from "@/lib/styled";
import Header from "@/components/Header";


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