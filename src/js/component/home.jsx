import React from "react";
import NavBar from "./navBar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <NavBar />
      <Jumbotron title="Jumbolicious Jumbotron" body="Pssstt... Valerie.. Click the buttons in nav.." />
      <div className="d-flex justify-content-center m-5 row-2">
        <div className="col-md-2 p-5">
          <Cards
            title="This is Japan"
            text="Here is some wonderful text"
            imageUrl="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            buttonUrl="https://en.wikipedia.org/wiki/Japan"
            buttonText="Click Here!"
          />
          <Cards
            title="A Random Location"
            imageUrl="https://picsum.photos/200/300"
            buttonUrl="https://www.merriam-webster.com/dictionary/random#:~:text=Synonyms%20of%20random-,1,done%2C%20or%20chosen%20at%20random"
            buttonText="Click Here!"
          />
          <Cards
            title="Here is Some Critterness"
            imageUrl="https://wildcard.codestuff.io/r/250/250"
            buttonUrl="https://en.wikipedia.org/wiki/Wildlife"
            buttonText="Click Here!"
          />
          <Cards
            title="This is Some Dog Town"
            imageUrl="https://wildcard.codestuff.io/dog/250/250"
            buttonUrl="https://en.wikipedia.org/wiki/Dog"
            buttonText="Click Here!"
          />
          <Cards
            title="It's a Beary Good Day"
            imageUrl="https://placebear.com/640/360"
            buttonUrl="https://en.wikipedia.org/wiki/Bear"
            buttonText="Click Here!"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
