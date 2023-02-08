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
         message: "Subscribe to simply",
         sub: "Dance",
         Buttoncolour: {Colours}
      }
    }

Buttonchange=()=> {
    this.setState({
        message: "Hit the bell icon to never miss an update",
        sub: "Subscribed"
    })
}
    
  render() {

    // split list of Button style types
    let colours = Colours.split("\n");

     // randomly select item from array
     let buttonColour = colours[Math.floor(Math.random() * colours.length)];

     console.log(buttonColour)

    return (
      <div>
        <h3>
            { this.state.message }
        </h3>
        <button className={`btn ${buttonColour}`} onClick={this.Buttonchange}>
            {this.state.sub}
        </button>
      </div>
    )
  }
}

export default Newcomp