import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './layout/Hheader'; //importing the Header from React
import Student from './Student';
import Footer from "./layout/footer";
import MainBody from './MainBody';


const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader() {
  return (
    <h1 className="heading1">React Course</h1>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray"
};

function SubHeader() {
  return <h1 style={subHeaderStyle}>this will be an exciting course</h1>;
}


//root render perdoretper me thirr funksionin
//nese dojm me htu ni link per foto : headshot = "linku" 
root.render(
  <div style={{backgroundColor: "black", color: "grey"}} >
    <Header />
    <div className="px-4">
    <MainBody />
    </div>
    <Footer/>
  </div>
);

