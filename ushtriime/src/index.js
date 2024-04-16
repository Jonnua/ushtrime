import React from 'react';//opsionale qekjo
import ReactDOM from 'react-dom/client';
//per me lidh me css qeta duhet me bo edhe ata anej ne index
import "./CSS/style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader(){
  return(
    <h1 className = "heading1">React Course</h1>
  )
}

const subHeaderStyle={
  color:"blueviolet",
  backgroundColor:"lightgray"
}

function SubHeader(){
  return <h1 style={subHeaderStyle}>this will be an exciting course</h1>;

}

function Header(){
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}


function MainBody(){
  return (
    <div>
    <p>in this course we will learn react js by building ushtriime </p>
    <ul>
      <li>call jona</li>
      <li>go to ubt emshir</li>
    </ul>
  </div>
  )
}

function Footer(){
  return <p style={{color: "gray",backgroundColor: "black"}}>Happy Coding!</p>
}

root.render(
  <div>
     <Header/>
     <MainBody/>
     <Footer/>
  </div>
 
);



