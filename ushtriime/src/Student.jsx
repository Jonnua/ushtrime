//import {faker} from '@faker-js/faker';

export default function Student(props) {//props perdoret per me i bart atributet t ni funksioni
    // const fullName = "Olti Miftari";
    // const programmingExp = 2;
    return (
      <div className="col-4 p-1">
        <div className="row border">
          <div className="col-2">
            <img src={props.headshot} className="w-100 py-2"  />
          </div>
          <div className="col-8">
            {props.name}
            <br />
            Coding experience {props.experience} years
          </div>
          <div className="col-2">
            {props.children}
            </div>
        </div>
      </div>
    );
  }
  
 
  