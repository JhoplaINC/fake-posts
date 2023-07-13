import { createContext, useContext, useState } from "react";

export const FakePostContext = createContext();

export const useFakePostContext = () => {
    const context = useContext(FakePostContext);
    if(!context) {
        throw new Error('We are sorry but you are not in Fake Post Context :(');
    }
    return context;
}

export const FakePostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
	const [postCounter, setPostCounter] = useState(0);

    const createPost = (data) => {
        setPosts([...posts, data]);
        setPostCounter((prevKey) => prevKey + 1);
    }

    return (
        <FakePostContext.Provider value={{
            posts,
            createPost,
            postCounter
        }}>
            {children}
        </FakePostContext.Provider>
    )
}