import './assets/scss/main.scss';
import './assets/scss/mainResponsive.scss';
import { Post, CreatePost, Explanation, Footer } from "./components";
import { FakePostContextProvider } from "./context/FakePostContext";

function App() {

	return (
		<>
			<FakePostContextProvider>
				<Explanation />
				<CreatePost />
				<Post />
				<Footer />
			</FakePostContextProvider>
		</>
	)
}

export default App
