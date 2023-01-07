import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer, PostContainer, PostContent, PostsList, PostTime, PostTitle } from "./styles";

const posts = [
    {
        title: 'JavaScript data types and data structures',
        time: 'Há 1 dia',
        description: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..'
    },
    {
        title: 'JavaScript data types and data structures',
        time: 'Há 1 dia',
        description: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..'
    },
    {
        title: 'JavaScript data types and data structures',
        time: 'Há 1 dia',
        description: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..'
    },
    {
        title: 'JavaScript data types and data structures',
        time: 'Há 1 dia',
        description: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..'
    },
    {
        title: 'JavaScript data types and data structures',
        time: 'Há 1 dia',
        description: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..'
    },
    {
        title: 'JavaScript data types and data structures',
        time: 'Há 1 dia',
        description: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..'
    }
]

export function Blog() {
    return (
        <BlogContainer>
            <Profile />

            <SearchForm />

            <PostsList>
                {posts.map(post => (
                    <PostContainer to="post">
                        <PostContent>
                            <header>
                                <PostTitle>
                                    {post.title}
                                </PostTitle>
                                <PostTime>
                                    {post.time}
                                </PostTime>
                            </header>
                            <p>
                                {post.description}
                            </p>
                        </PostContent>
                    </PostContainer>
                ))}
            </PostsList>
        </BlogContainer>
    )
}