import { useEffect } from "react";
import { useFakePostContext } from "../context/FakePostContext"


export const Post = () => {

    const { posts, postCounter } = useFakePostContext();

    useEffect(() => {
        const getPosts = () => {
            return posts;
        }
        getPosts();
    }, [postCounter])

    const renderPosts = () => {
        if(posts.length >= 1) {
            return(
                posts.map(post => (
                    <div className="post-data" key={post.id}>
                        <p>{post.author}</p>
                        <p>{post.content}</p>
                    </div>
                ))
            )
        }
        return (
            <p>
                No hay posts
            </p>
        )
    }
    renderPosts();


    return (
        renderPosts()
    )
}
