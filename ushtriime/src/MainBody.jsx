import Student from './Student';
import StudentReview from './layout/StudentReview';
function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;

  return (
    <div style={{minheight:"70vh"}}>
      <p>in this course we will learn {whatWeWillLearn}  by building ushtriime <br />
        total lectures {lectureCount}
      </p>
      <ul>
        <li>basic foundation</li>
        <li>functional and class components</li>
      </ul>{
        //////////
      }
      <div className="container row">Students Enrolled</div>
    <Student experience={2} name = "Jona Rrahmani" headshot = "https://api.lorem.space/image/face?w=150&h=153" 
    >
<StudentReview/>
    </Student>
    <Student experience={3} name = "Viola Olloni" headshot = "https://api.lorem.space/image/face?w=150&h=152"
    >
      <StudentReview/>
    </Student>
    <Student experience={1} name = "Olti Miftari" headshot = "https://api.lorem.space/image/face?w=150&h=151"
    />
      
    <div/>
      <div>
        Enter task : <input maxLength={5} readOnly={false} placeholder="Olti" />
      </div>
    </div>
  );
}
export default MainBody;