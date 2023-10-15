// import react_svg from "../assets/react.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import "./card.css";

const Card = (props) => {
  let course = props.course;
  const [isliked, setisliked] = useState(false);
  // console.log(course);
  return (
    <div className="Main-card">
      <div>
        <img className="Image" src={course.image.url} alt={course.image.alt} />
      </div>
      <button className="btn-like" onClick={() => setisliked((prev) => !prev)}>
        {isliked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
      <div className="heading">
        <h1>{course.title}</h1>
      </div>
      <div className="description">{course.description}</div>
    </div>
  );
};
export default Card;
