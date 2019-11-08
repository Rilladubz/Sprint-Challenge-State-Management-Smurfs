import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";

const SmurfList = (props) => {
//   console.log("LIST", props);
  return (
   <div>
       {props.smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf}/>)}
   </div>
  );
};

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    };
  };
  
  export default connect(mapStateToProps)(SmurfList);
