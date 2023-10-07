import Card from "./Card";

export default function Cards(props) {
  let courses = props.courses;

  function Getcoursec(courses) {
    let Allcourses = [];
    Object.values(courses).forEach((Array) => {
      Array.forEach((data) => {
        Allcourses.push(data);
      });
    });
    // console.log(Allcourses);
    return Allcourses;
  }
  let Allcourses = Getcoursec(courses);
  return (
    <div>
      {Allcourses.map((course) => {
        <Card key={course.id} course={course} />;
      })}
    </div>
  );
}
