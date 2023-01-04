import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 18.5rem;
    background-color: ${({ theme }) => theme['base-profile']};

    display: flex;
    align-items: center;
    justify-content: space-between;
`;