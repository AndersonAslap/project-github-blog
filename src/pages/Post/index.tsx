import { PostHeader } from "./components/PostHeader";
import { PostContainer, PostContent } from "./styles";

export function Post() {
    return (
        <PostContainer>
            <PostHeader />
            <PostContent>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quos illum quas alias dicta id, nihil est nemo in ea nam velit soluta libero ipsum dolorum officiis porro voluptatem atque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi ea numquam in aliquam pariatur libero officiis debitis eaque velit, laborum possimus quam nobis labore autem. Ipsum accusamus explicabo harum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum autem consectetur hic magni aspernatur, ullam libero! Alias eum porro id, nobis ullam autem, corporis unde provident qui amet facere?</p>
            </PostContent>
        </PostContainer>
    )
}