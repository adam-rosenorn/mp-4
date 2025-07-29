"use client"
import Link from 'next/link'
import styled from 'styled-components'


const StyledLinkBox = styled.div`
    justify-content: center;
    width: 40%;
    background-color: #c0c5ce;
    height: 60%;
    border: 2px solid #a7adba;
    border-radius: 10px;
    margin: 25px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
`;


const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledListItem = styled.li`
    border-right: 2px solid #343d46;
    border-bottom: 2px solid #343d46;
    border-left: 2px solid #343d46;
    border-top: 2px solid #343d46;
    text-align: center;
    margin: 3% 3%;
    width: 50%;
    font-size: calc(2px + 1vh + 1vw);
    background-color: #4f5b66;
`;

const StyledH2 = styled.h2`
    text-align: center;
    text-transform: capitalize;
`;


export default function LinkBox(props: {category: string}) {
    return (
        <StyledLinkBox>
                <StyledH2>Top {props.category}</StyledH2>
                <StyledList>
                    <StyledListItem>
                        <StyledLink href={`/${props.category}/2021`}>
                            2021/2022 Season
                        </StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink href={`/${props.category}/2022`}>
                            2022/2023 Season
                        </StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink href={`/${props.category}/2023`}>
                            2023/2024 Season
                        </StyledLink>
                    </StyledListItem>
                </StyledList>
        </StyledLinkBox>
    )
}