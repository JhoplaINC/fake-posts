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

    const getDate = () => {
        let day = new Date().getDate();
        let month = new Date().getUTCMonth() + 1;
        let year = new Date().getUTCFullYear();

        return day + '/' + month + '/' + year;
    }

    const [posts, setPosts] = useState([{
        id: 0,
        author: 'Jhopla',
        content: `Inserted post, right into posts' state, this is how you'll
                  see every post added here in this page. I hope you find this
                  nice c: saludos!`,
        date: getDate()
    }]);

	const [postCounter, setPostCounter] = useState(0);

    const createPost = (data) => {
        setPosts([data, ...posts]);
        setPostCounter((prevKey) => prevKey + 1);
    }

    return (
        <FakePostContext.Provider value={{
            posts,
            createPost,
            postCounter,
            getDate
        }}>
            {children}
        </FakePostContext.Provider>
    )
}