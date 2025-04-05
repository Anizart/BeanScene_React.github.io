// import { useState } from "react";
import "@assets/styles/reset.css";
import "@assets/styles/global.css";
import {
	Welcome,
	AboutUs,
	Menu,
	Priorities,
	Chance,
	Demonstration,
	Response,
	Subscribe,
} from "./pages/main/sections";
import Header from "./shared/widgets/header/header";
import Footer from "./shared/widgets/footer/footer";
import "@assets/styles/global.css";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Welcome />
				<AboutUs />
				<Menu />
				<Priorities />
				<Chance />
				<Demonstration />
				<Response />
				<Subscribe />
			</main>
			<Footer />
		</div>
	);
}

export default App;
