import styled from "styled-components";

export const BlogContainer = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
`;

export const PostsList = styled.div`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 6rem;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;

export const PostContainer = styled.div`
    width: 416px;
    height: 260px;
    background-color: ${({ theme }) => theme['base-post']};
    border: 0;
    border-radius: 10px;

    padding: 32px;

    cursor: pointer;
`;

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
`;

export const PostTitle = styled.span`
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme['base-title']};
    line-height: 160%;
`;

export const PostTime = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme['base-span']};
`;