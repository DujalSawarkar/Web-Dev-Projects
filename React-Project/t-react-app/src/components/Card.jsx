

const Card = (props) => {
  let course = props.course;
  console.log(course);
  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.image.alt} />
      </div>
      <button>
        
      </button>
      <div>
        <h1>{course.title}</h1>
      </div>
      <div>{course.description}</div>
    </div>
  );
};
export default Card;
