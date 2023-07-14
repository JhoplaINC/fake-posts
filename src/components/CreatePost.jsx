import { useState } from 'react';
import { useFakePostContext } from '../context/FakePostContext';
import { Form, Formik } from 'formik'

export const CreatePost = () => {

    const { createPost } = useFakePostContext();

    const [postId, setPostId] = useState(1);

    const getDate = () => {
        let day = new Date().getDate();
        let month = new Date().getUTCMonth() + 1;
        let year = new Date().getUTCFullYear();

        return day + '/' + month + '/' + year;
    }


    return (
        <>
            <div className="form-container">
                <Formik
                    initialValues={{
                        id: postId,
                        author: '',
                        content: '',
                        date: getDate()
                    }}
                    enableReinitialize={true}
                    onSubmit={async (values, actions) => {
                        createPost(values);
                        setPostId(values.id + 1);
                    }}
                >
                    {({ handleChange, handleSubmit, values, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="id"
                                    hidden
                                    onChange={handleChange}
                                    value={values.id}
                                />
                            </div>
                            <div className="input-container">
                                <label>Author</label>
                                <input
                                    type="text"
                                    name="author"
                                    placeholder="What's your name"
                                    onChange={handleChange}
                                    value={values.author}
                                />
                            </div>
                            <div className="input-container">
                                <label>Content</label>
                                <textarea
                                    name="content"
                                    placeholder="Tell us how are you feeling today"
                                    onChange={handleChange}
                                    value={values.content}
                                ></textarea>
                            </div>
                            <div className="input-container">
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Creating post" : "Create post"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
