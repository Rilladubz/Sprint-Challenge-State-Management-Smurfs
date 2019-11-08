import React, { useState } from "react";
import axios from "axios";

const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: 0,
    height: "",
    id: Date.now()
  });
  console.log("INCOMING", smurf);

  const handleChanges = e => {
    // console.log({ [e.target.name]: e.target.value });
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submit");
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h2>New Smurf:</h2>
        <label>Name: </label>
        <input
          placeholder="Name:"
          name="name"
          onChange={handleChanges}
          value={smurf.name}
        />
        <label>Age: </label>
        <input
          placeholder="Age:"
          name="age"
          onChange={handleChanges}
          value={smurf.age}
        />
        <label>Height: </label>
        <input
          placeholder="Height:"
          name="height"
          onChange={handleChanges}
          value={smurf.height}
        />
      </form>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SmurfForm;
