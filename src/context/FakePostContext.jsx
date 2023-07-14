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
        content: `Contenido de un post normal, más o menos largo para testear como se vería,
                  esto sigue siendo parte del texto de prueba, ola jaja salu2`,
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