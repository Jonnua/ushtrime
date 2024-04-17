import logo from "../images/react.png";

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
    return <h1 style={subHeaderStyle}className="text-center">this will be an exciting course</h1>;
  }
  
  export default  function Header() {
    return (
      <div>
        <MainHeader />
        <SubHeader />
      </div>
    );
  }
  