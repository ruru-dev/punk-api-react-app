// In order to create a new component in React we need to import React.
import React from 'react';

// Importing our icon componenet.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
// import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

// Our function declaration.
function BeerCard(props) {
  return (
    <li style={ {listStyle: "none"} }>
      <img style={ {height: "200px"} } src={props.image_url}></img>
      <h3> {props.name} <span> {props.first_brewed} </span></h3>
      <h4> {props.tagline} </h4>
      <p> <span> {props.abv} </span> {props.description} </p>
      <FontAwesomeIcon icon={faHeartRegular} style={{color: "#9680b7",}} size="2xl" />
    </li>
  )
};

// If we want to use this function in another file we need to export it.
export default BeerCard;