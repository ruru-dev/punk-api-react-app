// Importing dependencies.
import React, { Component } from 'react';
import axios from 'axios';

// Importing styles.
import './App.css';

// Importing components.
import BeerCard from './BeerCard';

class App extends Component {
 constructor(){
  super()
  this.state = {
    arrayOfBeer : []
  };
 };

// The componentDidMount() method runs after the component output has been rendered to the DOM.
componentDidMount(){
  axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      const arrayOfBeer = res.data
      this.setState({ arrayOfBeer })
    })
};

render(){
return (
  <div className="App">
    <header className="App-header">
      <ol> 
        { this.state.arrayOfBeer.map((beer,index) => {
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
        )
      })
      };
      </ol>
    </header>
  </div> 
);
};
};

export default App;