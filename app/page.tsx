"use client"
import { StyledMain, StyledInnerDiv, StyledH1 } from "@/lib/styled";
import LinkBox from "@/components/LinkBox";

export default function Home() {
    return (
        <StyledMain>
            <StyledH1>Danish Superliga Statistics</StyledH1>
            <StyledInnerDiv>
                <LinkBox category="scorers"/>
                <LinkBox category="assists"/>
            </StyledInnerDiv>
        </StyledMain>
    );
}

