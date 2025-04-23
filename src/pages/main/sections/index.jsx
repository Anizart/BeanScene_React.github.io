import Welcome from "./welcome/welcome";
import AboutUs from "./about-us/about-us";
import Menu from "./menu/menu";
import Priorities from "./priorities/priorities";
import Chance from "./chance/chance";
import Demonstration from "./demonstration/demonstration";
import Response from "./response/response";
import Subscribe from "./subscribe/subscribe";

const IndexPage = ({ isSignInOpen, setIsSignInOpen }) => {
	return (
		<>
			<Welcome />
			<AboutUs />
			<Menu
				isSignInOpen={isSignInOpen}
				setIsSignInOpen={setIsSignInOpen}
			/>
			<Priorities />
			<Chance />
			<Demonstration />
			<Response />
			<Subscribe />
		</>
	);
};

export default IndexPage;
