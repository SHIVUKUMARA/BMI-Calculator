import React, { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  //   logic
  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert(`Please Enter a valid Weight and Height`);
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // message

      if (bmi < 25) {
        setMessage("Your are underWeight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You have Normal weight");
      } else {
        setMessage("You are overWeight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lb): </label>
            <input
              type="text"
              placeholder="Enter Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in): </label>
            <input
              type="text"
              placeholder="Enter Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
      <h2>Created By SHIVUKUMARA@2023</h2>
    </div>
  );
};

export default Bmi;
