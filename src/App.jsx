// import { useState } from "react";
import "@assets/styles/reset.css";
import "@assets/styles/global.css";
import { Welcome } from "./pages/main/sections/index.js";
import { AboutUs } from "./pages/main/sections/index.js";
import { Menu } from "./pages/main/sections/index.js";
import { Priorities } from "./pages/main/sections/index.js";
import { Subscribe } from "./pages/main/sections/index.js";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Welcome />
			<AboutUs />
			<Menu />
			<Priorities />
			<Subscribe />
		</>
	);
}

export default App;
