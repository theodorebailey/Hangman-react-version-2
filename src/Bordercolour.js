import React from 'react';

const Borders = `
border-primary
border-secondary
border-success
border-danger
border-warning
border-info
border-dark
`

function Bordercolour () {
    // split list of border style types
    let borders = Borders.split("\n");

    // randomly select item from array
    let borderColour = borders[Math.floor(Math.random() * borders.length)];

    return borderColour;

  
}

export { Bordercolour }
