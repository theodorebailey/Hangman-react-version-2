import React, { useState } from "react";
import Hangman from "./Hangman";
import "./App.css";
import { Header } from './components/common';
import { Season } from './Season';
// import Help from './components/Help';

import img0 from './seasons/0.png';
import img1 from './seasons/1.png';
import img2 from './seasons/2.png';
import img3 from './seasons/3.png';

const data = [
  {
    id: "1",
    key: "1",
    img: './seasons/0.png'
  },
  {
    id: "2",
    key: "2",
    img: './seasons/1.png'
  },
  {
    id: "3",
    key: "3",
    img: './seasons/2.png'
  },
  {
    id: "4",
    key: "4",
    img: './seasons/3.png'
  }
];

function App() {

  console.log(Season)
  const [toggle, setToggle] = useState("1");


  return (
    <div className="App container-fluid">
      <div className="row">
        <img onClick={data.map(({key, img }) => {
          return (
            <div className="img">
            {toggle === key ? (
              <>
                <img onClick={() => setToggle(key)} src={img} key={key} className="photo" />
              </>
            ) : null}
          </div>
          )
        })}
          alt="" />
      </div>
      <div className="row border bg-light d-flex flex-column">
        <Header />
        <Hangman />
      </div>
    </div>
  );
}

export default App;