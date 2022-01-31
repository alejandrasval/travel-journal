import React from "react";
import { ImLocation } from "react-icons/im";

const Card = (props) => {
  return (
    <div className="container">
      <div className="left">
        <img className="location-img" src={props.img} alt="" />
      </div>
      <div className="right">
        <div className="location">
          <p className="location-name">
            <ImLocation className="location-icon" />
            {props.location}
          </p>
          <a
            className="location-link"
            href={props.map}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="name">{props.name}</h2>
        <h6 className="date">{props.date}</h6>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
