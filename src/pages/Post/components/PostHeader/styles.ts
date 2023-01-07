import styled from "styled-components";

export const PostHeaderContainer = styled.div`
    width: 100%;
    height: 168px;
    margin-top: -5.5rem;
    padding: 32px 40px;

    background-color: ${({ theme }) => theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`
export const PostHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    header {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
    }

    div {
        display: flex;
        gap: 8px;
        flex-direction: column;

        p {
            display: flex;
            align-items: center;
            gap: 2rem;

            span {
                display: flex;
                gap: 8px;
                align-items: center;
            }
        }
    }
`

export const Title = styled.span`
    font-size: 24px;
    font-weight: bold;  
`