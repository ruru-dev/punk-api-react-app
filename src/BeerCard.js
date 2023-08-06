// In order to create a new component in React we need to import React.
// Import a named export from the react module (it is not the default export so we need to destructure). 
// In this case, we need the useState method from the react module.
import { useState } from 'react';

// Importing css specific to this component.
import './BeerCard.css';

// Importing our icon component.
// Here we are importing the fontAwesomeIcon component from the react-fontawesome library.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Here we are importing the fontAwesome heart icon (regular) from the free regular icon pack.
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
// Here we are importing the fontAwesome heart icon (solid) from the free solid icon pack.
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

// Our function declaration.
function BeerCard(props) {
  // isLiiked is the name of the property on our state object.
  // setIsLiked is our setter function that allows you to change the value of is liked.
  const [isLiked, setIsLiked] = useState(false);
  
  const toggleLiked = () => {
    // Here we are using a callback function to set the value isLiked.
    // We need a callback function because we are dependent on the current value of isLiked to determine what to change it to.
    // We can use a terse arrow function to make this clean. 
    // React will automatically pass in the current value of isLiked as an argument to our callback function.
    // If you only have one argument, you don't need parentheses for the arrow function.
    // In the callback function body, we will simply invert the current value and return it to the setIsLiked function.
    // Because there is only one statement in the body, we don't need curly braces.
    // Because there is only one statement we have an implicit return statement (the value of !current will be returned).
    setIsLiked(current => !current);
  }
  
  return (
    <li className="beer-card">
      <img src={props.image_url}></img>
      <h3> {props.name} <span> {props.first_brewed} </span></h3>
      <h4> {props.tagline} </h4>
      <p> <span> {props.abv} </span> {props.description} </p>
      {/* Here we are using a ternary operator to determine which icon to display based on whether the BeerCard is currently liked. */}
      {/* icon and size are props. */}
      {/* style and onClick are attributes processed by React. */}
      <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} 
                       size="2xl"
                       style={{color: "#9680b7"}} 
                       onClick={toggleLiked}/>
    </li>
  )
};

// If we want to use this function in another file we need to export it.
export default BeerCard;