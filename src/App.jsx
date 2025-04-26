import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import Header from "./shared/widgets/header/header";
import IndexPage from "./pages/main/sections";
import Office from "./pages/office/sections/office/office";
import Cart from "./pages/cart/sections/cart/cart";
import NotfoundPage from "./pages/notfound-page-404/notfound-page";
import Footer from "./shared/widgets/footer/footer";
import ModalSearch from "./shared/ui/modals/search/search";
import ModalSignIn from "./shared/ui/modals/signin/signin";
import ModalSignUp from "./shared/ui/modals/signup/signup";
import ModalConfirmation from "./shared/ui/modals/confirmation/confirmation";
import ModalEdit from "./shared/ui/modals/edit/modal-edit";
import ModalMessage from "./shared/ui/modals/message/message";

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
	const [isConfirmation, setIsConfirmation] = useState(false);
	const [isModalEdit, setIsModalEdit] = useState(false);
	const [isModalMessage, setModalMessage] = useState({
		isOpen: false,
		message: "",
	});

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

	useEffect(() => {
		document.body.classList.toggle("hidden", isConfirmation);
	}, [isConfirmation]);

	useEffect(() => {
		document.body.classList.toggle("hidden", isModalEdit);
	}, [isModalEdit]);

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
								setModalMessage={setModalMessage}
							/>
						}
					/>
					<Route
						path="/office"
						element={
							<Office
								isConfirmation={isConfirmation}
								isModalEdit={isModalEdit}
								setIsConfirmation={setIsConfirmation}
								setIsModalEdit={setIsModalEdit}
							/>
						}
					/>
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
				setModalMessage={setModalMessage}
			/>
			<ModalSignUp
				setIsSignUpOpen={setIsSignUpOpen}
				isSignUpOpen={isSignUpOpen}
				onSwitchToSignIn={() => {
					setIsSignUpOpen(false);
					setIsSignInOpen(true);
				}}
				setModalMessage={setModalMessage}
			/>
			<ModalConfirmation
				isConfirmation={isConfirmation}
				setIsConfirmation={setIsConfirmation}
				setModalMessage={setModalMessage}
			/>
			<ModalEdit
				isModalEdit={isModalEdit}
				setIsModalEdit={setIsModalEdit}
				setModalMessage={setModalMessage}
			/>
			<ModalMessage
				isOpen={isModalMessage.isOpen}
				message={isModalMessage.message}
			/>
		</div>
	);
};

export default App;
