import React from 'react';//opsionale qekjo
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader(){
  return(
    <h1>React Course</h1>
  )
}
function SubHeader(){
  return(
    <h1>this will be an exciting course</h1>
  )
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
  return(
    <p>Happy Coding!</p>
  )
}

root.render(
  <div>
     <Header/>
     <MainBody/>
     <Footer/>
  </div>
 
);



