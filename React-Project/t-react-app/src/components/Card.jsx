// import react_svg from "../assets/react.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const Card = (props) => {
  let course = props.course;
  const [isliked, setisliked] = useState(false);
  // console.log(course);
  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.image.alt} />
      </div>
      <button onClick={() => setisliked((prev) => !prev)}>
        {isliked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
      <div>
        <h1>{course.title}</h1>
      </div>
      <div>{course.description}</div>
    </div>
  );
};
export default Card;
