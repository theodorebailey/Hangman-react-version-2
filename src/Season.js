import React, { useState } from "react";
import './App.css';

// import image files
import img0 from './seasons/0.png'
import img1 from './seasons/1.png'
import img2 from './seasons/2.png'
import img3 from './seasons/3.png'

// create array object
const season = [
    {
    id: "1",
    key: "1",
    title: "Spring",
    img: img1
    },
    {
    id: "2",
    key: "2",
    title: "Summer",
    img: img0
    },
    {
    id: "3",
    key: "3",
    title: "Autumn",
    img: img2
    },
    {
    id: "4",
    key: "4",
    title: "Winter",
    img: img3
    }
];

// function to populate images on page in alternative method using an array of objects
function Season() {

    // use State toggle, to toggle state between key selected
    const [toggle, setToggle] = useState("1");
    // 
    return (
    <div className="container">
        {season.map(({ title, text, key, img }) => {
        return (
            <div className="row">
                <div>
                <h1 onClick={() => setToggle(key)}>{title}</h1>
                {toggle === key ? (
                    <>
                    {/* <p>{text}</p> */}
                    </>
                ) : null}
                </div>
                <div className="col-xl col-xs-6">
                {toggle === key ? (
                    <>
                    {/* inline style image */}
                    <img style={{width: 400, height: 400, borderRadius: 400/ 2}}  src={img} key={key} />
                    </>
                ) : null}
                </div>
            </div>
        );
        })}
    </div>
    );
}

export default Season
