import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/SmurfProfile.scss";
function SmurfProfile(props) {
  const { id } = useParams();
  const [smurf, setSmurf] = useState({});
  useEffect(() => {
    if (props.smurfs.length > 0) {
      const thisSmurf = props.smurfs.filter(
        (s) => parseInt(s.id) === parseInt(id)
      )[0];
      if (thisSmurf && thisSmurf.name) {
        setSmurf(thisSmurf);
      }
    } else {
      setSmurf({ name: "error", id: -1, age: "error", height: "error" });
    }
  }, [props.smurfs, id]);
  return (
    <>
      <div className="navigateBack">
        <NavLink to="/">🠔 back to smurf village</NavLink>
      </div>
      <div className="smurfProfile">
        <h2>{smurf.name}</h2>
        <p>age: {smurf.age}</p>
        <p>height: {smurf.height}</p>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { smurfs: state.smurfs };
};
export default connect(mapStateToProps, {})(SmurfProfile);
