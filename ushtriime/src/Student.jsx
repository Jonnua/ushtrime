export default function Student(props) {//props perdoret per me i bart atributet t ni funksioni
    // const fullName = "Olti Miftari";
    // const programmingExp = 2;
    return (
      <div className="container p-4">
        <div className="row border">
          <div className="col-1">
            <img src={`https://ui-avatars.com/api/?name=${props.name}`} className="w-100" alt="avatar" />
          </div>
          <div className="col-10">
            {props.name}
            <br />
            programming experience {props.experience} years
          </div>
        </div>
      </div>
    );
  }
  
 
  