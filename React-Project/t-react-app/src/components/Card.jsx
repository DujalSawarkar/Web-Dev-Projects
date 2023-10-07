const Card = (props) => {
  let course = props.course;

  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.image.alt} />
      </div>
      {/* <div>
        <Like />
      </div> */}
      <div>
        <h1>{course.title}</h1>
      </div>
      {/* <div></div> */}
    </div>
  );
};

export default Card;
