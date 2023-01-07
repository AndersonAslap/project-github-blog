import { PostHeaderContainer, PostHeaderContent, Title } from "./styles";

import { FaGithub, FaCalendar, FaComment } from 'react-icons/fa';
import { useParams } from "react-router-dom";

export function PostHeader() {

    const { id } = useParams();

    return (
        <PostHeaderContainer>
            <PostHeaderContent>
                <header>
                    <a>voltar</a>
                    <a>ver no github</a>
                </header>
                
               
                <div>
                    <Title>Javascript data types and data structures ID : {id}</Title>

        
                    <p>
                        <span>
                            <FaGithub />
                            AndersonAslap
                        </span>

                        <span>
                            <FaCalendar />
                            AndersonAslap
                        </span>

                        <span>
                            <FaComment />
                            AndersonAslap
                        </span>
                    </p>
                </div>
            </PostHeaderContent>
        </PostHeaderContainer>
    )
}