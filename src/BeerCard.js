// In order to create a new component in React we need to import React.
import { useState } from 'react';

// Importing css specific to this component.
import './BeerCard.css';

// Importing our icon componenet.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

// Our function declaration.
function BeerCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(current => !current);
  }
  
  return (
    <li className="beer-card">
      <img src={props.image_url}></img>
      <h3> {props.name} <span> {props.first_brewed} </span></h3>
      <h4> {props.tagline} </h4>
      <p> <span> {props.abv} </span> {props.description} </p>
      <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} 
                       style={{color: "#9680b7",}} 
                       size="2xl" 
                       onClick={toggleLiked}/>
    </li>
  )
};

// If we want to use this function in another file we need to export it.
export default BeerCard;