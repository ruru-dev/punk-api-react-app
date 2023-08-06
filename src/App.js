// Importing dependencies.
// Import a named export from the react module (it is not the default export). 
// In this case, we need the Component class from the react module.
import { Component } from "react";
import axios from "axios";

// Importing styles.
import "./App.css";

// Importing components.
import BeerCard from "./BeerCard";

// We are creating a class-based component named App which will extend the generic Component class from react.
class App extends Component {
  constructor() {
    // This invokes the constructor of the parent.
    super();
    this.state = {
      arrayOfBeer: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard
                  key={index}
                  name={beer.name}
                  image_url={beer.image_url}
                  first_brewed={beer.first_brewed}
                  tagline={beer.tagline}
                  abv={beer.abv}
                  description={beer.description}
                />
              );
            })}
            ;
          </ol>
        </header>
      </div>
    );
  }

  // The componentDidMount() method runs after the component output has been rendered to the DOM.
  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      // Passing a variable in and turning it into a property on the state object.
      this.setState({ arrayOfBeer });
    });
  }
}

export default App;
