import React, { Component } from 'react';

const Colours = `
btn-primary
btn-secondary
btn-success
btn-danger
btn-warning
btn-info
btn-light
btn-dark
`

export class Buttoncomp extends Component {

    
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Change the colour",
      }
    }

Buttonchange=()=> {
    this.setState({
        message: "Change the mood",
    })
}
    
  render() {

    // split list of Button style types
    let colours = Colours.split("\n");

     // randomly select item from array
     let buttonColour = colours[Math.floor(Math.random() * colours.length)];
     let buttonColour1 = colours[Math.floor(Math.random() * colours.length)];
     let buttonColour2 = colours[Math.floor(Math.random() * colours.length)];


    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <button className={`btn ${buttonColour}`} onClick={this.Buttonchange}>
                {this.state.message}
            </button>
          </div>
          <div className="col-sm">
            <button className={`btn ${buttonColour1}`} onClick={this.Buttonchange}>
                {this.state.message}
            </button>
          </div>
          <div className="col-sm">
            <button className={`btn ${buttonColour2}`} onClick={this.Buttonchange}>
                {this.state.message}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttoncomp
