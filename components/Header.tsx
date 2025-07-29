import {StyledHeader, StyledHeaderLink} from "@/lib/styled";



export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderLink href="/">Football Statistics</StyledHeaderLink>
            <div>
                <p>2021 - 2023</p>
            </div>
        </StyledHeader>
    );
}