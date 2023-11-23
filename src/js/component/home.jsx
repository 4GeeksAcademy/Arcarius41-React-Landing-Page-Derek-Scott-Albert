import React from "react";
import NavBar from "./navBar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<NavBar />
		<Jumbotron 
		title = "This is my Jumbotron"
		body = "This is the body"
		/>
		<div className="d-flex justify-content-center m-5 row-2" >
			<div className="col-md-2 p-5">

			<Cards
			title = "This is Japan"
			text="Here is some wonderful text" 
			imageUrl="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" 
			buttonUrl="https://en.wikipedia.org/wiki/Japan"
			buttonText="Click Here!"
			/>
			<Cards 
			title = "This is my second card"
			/>
			<Cards 
			title = "This is my third card"
			/>
			<Cards 
			title = "This is my first card"
			/>
			<Cards 
			title = "This is my first card"
			/>

			</div>
		</div>
		</div>
	);
};


export default Home;



