import { useEffect } from 'react';
import { useFakePostContext } from '../context/FakePostContext';

export const Post = () => {

    const { posts, postCounter } = useFakePostContext();

    useEffect(() => {
        const getPosts = () => {
            return posts;
        }
        getPosts();
    }, [postCounter])

    const renderPosts = () => {
        if (posts.length >= 1) {
            return (
                posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="post-header">
                            <div className="post-profile-photo">
                                <img src="images/default_profile_photo.png" alt="profile_photo" />
                            </div>
                            <div className="post-author">
                                <p>{post.author}</p>
                            </div>
                            <div className="post-date">
                                <p>Publicado el: {post.date}</p>
                            </div>
                        </div>
                        <div className="post-body">
                            <p>{post.content}</p>
                        </div>
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
