import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

import "./App.css";

//components
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = props => {
  console.log("IN APP STATE:", props);
  useEffect(() => {
    props.getSmurfs();
  }, []);

  // if (props.fetchStatus.isFetching === true) {
  //   return <h1>LOADING...</h1>;
  // } else if (props.fetchStatus.Error === "undefined") {
  //   return <h1>:( Sorry but our APP is down... Please Try Again Later</h1>;
  // } else {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfList />
         
      </div>
    );
  // }
};

const mapStateToProps = state => {
  return {
    fetchStatus: state.fetchStatus,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
