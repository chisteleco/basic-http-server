import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

    const [text, setText] = useState();
    const [color, setColor] = useState();
    const [imageurl, setImage] = useState();
    const [secretText, setSecret] = useState();
    const [otherFile, setOtherFile] = useState();
    useEffect(() => {
        async function fetchData() {
            
            let result = await fetch(
                '/dec',
            );

            
            let data = await result.json();
            
            setText(data.msg);
            setImage(data.img);
            setColor(data.color);
            setSecret(data.secret);
            setOtherFile(data.otherFile);
          
        }
        fetchData();
       
    });
    //
    const renderText = () => {

        if (typeof text !== "undefined") {
            return <label className="TextoTarjeta">{text}</label>
        }
        else { return <></> }
    }
    const renderOtherFile = () => {

        if (typeof otherFile !== "undefined") {
            return <audio src={otherFile} controls></audio>
        }
        else { return <></>}
    }
    const renderImage = () => {

        if (typeof imageurl !== "undefined") {
            return <img src={imageurl} height='25%' width='25%'></img>
        }
        else { return <></> }
    }
    const renderSecret = () => {

        if (typeof secretText !== "undefined") {
            return <label className="secretText">{secretText}</label>
        }
        else { return <></> }
    }
  return (
      <div className="AppBackGround" style={{ backgroundColor: color }}>
          <header className="App">
              {renderText()}
              <br />
              {renderOtherFile()}
              <hr></hr>
              {renderImage()}
              <hr></hr>
              {renderSecret()}
            
        
      </header>
    </div>
  );
}

export default App;
