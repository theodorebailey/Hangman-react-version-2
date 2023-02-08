import React, { Component } from 'react';

const Colours = `
btn-primary
btn-secondary
btn-success
btn-danger
btn-warning
btn-info
btn-dark
`

function Buttoncolour () {
    // split list of Button style types
    let colours = Colours.split("\n");

    // randomly select item from array
    let buttonColour = colours[Math.floor(Math.random() * colours.length)];

    return buttonColour

  
}

export { Buttoncolour }

// btn 
// btn 
// btn 
// btn 
// btn 
// btn 
// btn 
// btn 