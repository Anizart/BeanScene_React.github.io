import Header from "./shared/widgets/header/header";
import IndexPage from "./pages/main/sections";
import Office from "./pages/office/sections/office/office";
import Cart from "./pages/cart/sections/cart/cart";
import NotfoundPage from "./pages/notfound-page-404/notfound-page";
import Footer from "./shared/widgets/footer/footer";
import ModalSearch from "./shared/ui/modals/search/search";
import ModalSignIn from "./shared/ui/modals/signin/signin";
import ModalSignUp from "./shared/ui/modals/signup/signup";
import ModalMessage from "./shared/ui/modals/message/message";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

const App = () => {
	//+ header:
	const [mode, onToggleMode] = useState(() => {
		const saved = localStorage.getItem("mode");
		if (saved === null) {
			localStorage.setItem("mode", JSON.stringify(false));
			return false;
		}
		return JSON.parse(saved);
	});

	const [isBurgerOpen, onToggleBurger] = useState(false);

	const [isSignUpOpen, setIsSignUpOpen] = useState(false);
	const [isSignInOpen, setIsSignInOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("hidden", isBurgerOpen);
	}, [isBurgerOpen]);

	useEffect(() => {
		document.body.classList.toggle("hidden", isSignUpOpen || isSignInOpen);
	}, [isSignUpOpen, isSignInOpen]);

	useEffect(() => {
		localStorage.setItem("mode", JSON.stringify(mode));
		document.body.classList.toggle("dark", mode);
	}, [mode]);

	useEffect(() => {
		document.body.classList.toggle("hidden", isSearchOpen);
	}, [isSearchOpen]);

	return (
		<div className="wrapper">
			<Header
				isBurgerOpen={isBurgerOpen}
				mode={mode}
				isSignUpOpen={isSignUpOpen}
				isSignInOpen={isSignInOpen}
				isSearchOpen={isSearchOpen}
				onToggleBurger={onToggleBurger}
				onToggleMode={onToggleMode}
				setIsSignUpOpen={setIsSignUpOpen}
				setIsSignInOpen={setIsSignInOpen}
				setIsSearchOpen={setIsSearchOpen}
			/>
			<main className="main">
				<Routes>
					<Route
						path="/"
						element={
							<IndexPage
								isSignInOpen={isSignInOpen}
								setIsSignInOpen={setIsSignInOpen}
							/>
						}
					/>
					<Route path="/office" element={<Office />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotfoundPage />} />
				</Routes>
			</main>
			<Footer />
			<ModalSearch
				isSearchOpen={isSearchOpen}
				setIsSearchOpen={setIsSearchOpen}
			/>
			<ModalSignIn
				isSignInOpen={isSignInOpen}
				setIsSignInOpen={setIsSignInOpen}
				onSwitchToSignIn={() => {
					setIsSignInOpen(false);
					setIsSignUpOpen(true);
				}}
			/>
			<ModalSignUp
				setIsSignUpOpen={setIsSignUpOpen}
				isSignUpOpen={isSignUpOpen}
				onSwitchToSignIn={() => {
					setIsSignUpOpen(false); // Я бы написал через !, но gpt написал лучше явно закрывать, а так я понимаю это то же самое setIsSignUpOpen(!isSignUpOpen)
					setIsSignInOpen(true);
				}}
			/>
			<ModalMessage />
		</div>
	);
};

export default App;
