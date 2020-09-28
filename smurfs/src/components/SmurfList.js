import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";
import AddSmurf from "./AddSmurf";
import "../styles/SmurfList.scss";
class SmurfList extends React.Component {
  render() {
    return (
      <div className="smurfList">
        <AddSmurf />
        {this.props.smurfs.map((s, i) => {
          return <SmurfCard key={`smurf-${i}`} smurf={s} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apiStatus: state.apiStatus,
    smurfs: state.smurfs,
  };
};
export default connect(mapStateToProps, {})(SmurfList);
