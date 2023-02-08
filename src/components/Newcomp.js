import React, { Component } from 'react'

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

export class Newcomp extends Component {

    
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


    return (
      <div>
        <button className={`btn ${buttonColour}`} onClick={this.Buttonchange}>
            {this.state.message}
        </button>
      </div>
    )
  }
}

export default Newcomp
