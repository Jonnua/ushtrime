import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Hheader'; //importing the Header from React
import Students from './Student';



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

function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;

  return (
    <div>
      <p>in this course we will learn {whatWeWillLearn}  by building ushtriime <br />
        total lectures {lectureCount}
      </p>
      <ul>
        <li>call jona</li>
        <li>go to ubt emshir</li>
      </ul>
      <div>
        Enter task : <input maxLength={5} readOnly={false} placeholder="Olti" />
      </div>
    </div>
  );
}
function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}
//root render perdoretper me thirr funksionin
root.render(
  <div className="container">
    <Header />
    <MainBody />
    <div className="row">Students Enrolled</div>
    <Students experience={2} name = "Jona Rrahmani"/>
    <Students experience={3} name = "Viola Olloni"/>
    <Students experience={1} name = "Olti Miftari"/>
    <Footer/>
  </div>
);

