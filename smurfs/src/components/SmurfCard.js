import React from "react";

const SmurfCard = props => {
  console.log("IN CARD", props);
  return (
    <div>
      <div className="SmurfCard">
        <h2>Smurf Name: {props.smurf.name}</h2>
        <h3>Age: {props.smurf.age}</h3>
        <h3>Height: {props.smurf.height}</h3>
      </div>
    </div>
  );
};

export default SmurfCard;
