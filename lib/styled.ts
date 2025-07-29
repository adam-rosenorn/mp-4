"use client"
import styled from "styled-components";
import Link from "next/link";

export const SingleCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 10px;
    font-size: calc(2px + 0.4vh + 0.4vw);
    text-align: center;
    margin: 10px;
    background-color: #c0c5ce;
    border: 2px solid #343d46;
    border-radius: 10px;
    color: white;
`;

export const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin: 25px auto;
    max-width: 75%;
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid #343d46;
    background-color: #4f5b66;
    padding: 10px;
    border-radius: 10px;
    margin: 20px 0;
`;

export const StyledBody = styled.body`
    background-color: #4f5b66;
    margin: auto;
`;

export const StyledHeader = styled.header`
    color: #F3F3F3;
    text-align: center;
    margin:auto;
    border-bottom: 2px solid #c0c5ce;
`;

export const StyledHeaderLink = styled(Link)`
    color: #F3F3F3;
    text-decoration: none;
    font-size: calc(2px + 2vh + 2vw);
`;

export const StyledInnerDiv = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 60%;
`;

export const StyledH1 = styled.h1`
    text-align: center;
    margin-top: 50px;
`;

export const StyledMain = styled.main`
    margin: auto;
    padding-top: 70px;
    width: 75%;
    height: 80vh;
`;