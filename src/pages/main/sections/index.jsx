import Welcome from "./welcome/welcome";
import AboutUs from "./about-us/about-us";
import Menu from "./menu/menu";
import Priorities from "./priorities/priorities";
import Chance from "./chance/chance";
import Demonstration from "./demonstration/demonstration";
import Response from "./response/response";
import Subscribe from "./subscribe/subscribe";

const IndexPage = ({ isSignInOpen, setIsSignInOpen, setModalMessage }) => {
	return (
		<>
			<Welcome />
			<AboutUs />
			<Menu
				isSignInOpen={isSignInOpen}
				setIsSignInOpen={setIsSignInOpen}
				setModalMessage={setModalMessage}
			/>
			<Priorities />
			<Chance />
			<Demonstration />
			<Response />
			<Subscribe setModalMessage={setModalMessage} />
		</>
	);
};

export default IndexPage;
