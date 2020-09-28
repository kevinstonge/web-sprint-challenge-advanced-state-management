import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteSmurf } from "../actions/actions";
import "../styles/SmurfCard.scss";
function SmurfCard(props) {
  return (
    <div className="smurfCard">
      <NavLink to={`/${props.smurf.id}`} className="smurfName">
        {props.smurf.name}
      </NavLink>
      <p>height: {props.smurf.height}</p>
      <p>age: {props.smurf.age}</p>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>delete</button>
    </div>
  );
}

export default connect(null, { deleteSmurf })(SmurfCard);
