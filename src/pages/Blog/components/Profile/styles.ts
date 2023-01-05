import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    height: 212px;
    background-color: ${({ theme }) => theme['base-profile']};
    margin-top: -5.5rem;
    padding: 32px 40px;

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

export const ProfileContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
`;

export const ProfileImage = styled.img`
    width: 148px;
    height: 148px;
    border: 0;
    border-radius: 8px;
`;

export const ProfileAside = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-weight: bold;
            font-size: 1.5rem;
            line-height: 1.95rem;
        }

        a {
            font-size: 0.75rem;
            color: ${({ theme }) => theme['blue']};
            font-weight: bold;
        }

    }

    footer {
        padding-top: 1rem;

        display: flex;
        gap: 24px;

        span {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;