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
import ModalSearch from "./shared/ui/modals/search/search";
import ModalSignIn from "./shared/ui/modals/signin/signin";
import ModalSignUp from "./shared/ui/modals/signup/signup";
import ModalMessage from "./shared/ui/modals/message/message";
import "@assets/styles/global.css";
import { Component } from "react";

export default class App extends Component {
	// const [count, setCount] = useState(0);

	state = {
		isBurgerOpen: false,
		mode: false,
		isModalSignUp: false,
	};

	//+ burger:
	onToggleBurger = () => {
		this.setState(
			(prevState) => ({
				isBurgerOpen: !prevState.isBurgerOpen,
			}),
			() => {
				this.hiddenElem();
			},
		);
	};

	onToggleMode = () => {
		this.setState(({ mode }) => ({
			mode: !mode,
		}));
	};

	onOpenModalSignUp = () => {
		this.setState(
			(prevState) => ({
				isModalSignUp: !prevState.isModalSignUp,
			}),
			() => {
				this.hiddenElem();
			},
		);
	};

	hiddenElem() {
		document.body.classList.toggle("hidden");
	}

	render() {
		return (
			<div className="wrapper">
				<Header
					onToggleBurger={this.onToggleBurger}
					isBurgerOpen={this.state.isBurgerOpen}
					onToggleMode={this.onToggleMode}
					mode={this.state.mode}
					onOpenModalSignUp={this.onOpenModalSignUp}
				/>
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
				<ModalSearch />
				<ModalSignIn />
				<ModalSignUp isModalSignUp={this.state.isModalSignUp} />
				<ModalMessage />
			</div>
		);
	}
}
