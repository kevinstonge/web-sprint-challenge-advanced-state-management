import React from "react";
import { connect } from "react-redux";
import "../styles/ApiStatus.scss";
function ApiStatus(props) {
  return (
    <p className="apiStatus">
      {props.apiStatus.length === 0
        ? "all is well in the smurf village"
        : props.apiStatus}
    </p>
  );
}
const mapStateToProps = (state) => {
  return {
    apiStatus: state.apiStatus,
  };
};
export default connect(mapStateToProps, {})(ApiStatus);
