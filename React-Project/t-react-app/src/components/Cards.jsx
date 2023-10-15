import Card from "./Card";
import "./Cards.css";
export default function Cards(props) {
  let courses = props.courses;
  let data = props.data;
  function Getcoursec(courses) {
    let Allcourses = [];
    if (data == "All") {
      Object.values(courses).forEach((Array) => {
        Array.forEach((data) => {
          Allcourses.push(data);
        });
      });
      // console.log(Allcourses);
      // console.log(courses[data]);
      return Allcourses;
    } else {
      return courses[data];
    }
  }

  let Allcourses = Getcoursec(courses);
  return (
    <div className="All-Card">
      {Allcourses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}
