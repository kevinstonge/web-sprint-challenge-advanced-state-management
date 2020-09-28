import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/App.scss";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/actions";
import ApiStatus from "./ApiStatus";
import Header from "./Header";
import SmurfList from "./SmurfList";
import SmurfProfile from "./SmurfProfile";
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/">
            <ApiStatus />
            <SmurfList />
          </Route>
          <Route path="/:id">
            <SmurfProfile />
          </Route>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    apiStatus: state.apiStatus,
    smurfs: state.smurfs,
  };
};
export default connect(mapStateToProps, { getSmurfs })(App);
