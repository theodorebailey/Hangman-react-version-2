import React, { Component } from "react";

// template literal to produce list
const Colours = `btn-primary
btn-secondary
btn-success
btn-danger
btn-warning
btn-info
btn-light
btn-dark
`;

// template literal to produce list
const Letters = `Love
Fulfillment
Joy
Happiness
Excitment
Passion
Self-expression
Laughter
Magic
Wonder
`;

export class Buttoncomp extends Component {
  // constructor
  constructor(props) {
    // pass props
    super(props);
    // set state to message
    this.state = {
      message: "Change the colour",
    };
  }

  // arrow function for event
  Buttonchange = () => {
    // changed functionality but still required
    this.setState({
      message: "Change the mood",
    });
  };

  render() {
    // split list of Button style types by white space
    let colours = Colours.split("\n");

    // randomly select item from array
    let buttonColour = colours[Math.floor(Math.random() * colours.length)];
    let buttonColour1 = colours[Math.floor(Math.random() * colours.length)];
    let buttonColour2 = colours[Math.floor(Math.random() * colours.length)];

    // split letter list by white space into variable
    let lettering = Letters.split("\n");

    // randmoiser
    let buttonText = lettering[Math.floor(Math.random() * lettering.length)];
    let buttonText1 = lettering[Math.floor(Math.random() * lettering.length)];
    let buttonText2 = lettering[Math.floor(Math.random() * lettering.length)];

    return (
      // container for button elements
      <div className="container">
        {/* row bootstrap styling */}
        <div className="row">
          {/* small columns line of 3 */}
          <div className="col-sm">
            {/* button element class prop class, onclickmethod this.function  */}
            <button
              className={`btn ${buttonColour}`}
              onClick={this.Buttonchange}
            >
              {/* either text or if false default */}
              {buttonText || "Superfly"}
              {/* required for button functionality */}
              {this.state.change}
            </button>
          </div>
          <div className="col-sm">
            {/* button element class prop class, onclickmethod this.function  */}
            <button
              className={`btn ${buttonColour1}`}
              onClick={this.Buttonchange}
            >
              {/* either text or if false default */}
              {buttonText1 || "Delightful"}
            </button>
          </div>
          <div className="col-sm">
            {/* button element class prop class, onclickmethod this.function  */}
            <button
              className={`btn ${buttonColour2}`}
              onClick={this.Buttonchange}
            >
              {/* either text or if false default */}
              {buttonText2 || "Satisfaction"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttoncomp;
