// import react_svg from "../assets/react.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import "./card.css";

const Card = (props) => {
  const styles = {
    fontSize: "30px",
  };
  let course = props.course;
  const [isliked, setisliked] = useState(false);
  // console.log(course);
  const LikedFun = () => {
    setisliked((prev) => !prev);
    isliked ? console.log("true") : console.log("false");
  };

  return (
    <div className="Main-card">
      <div>
        <img className="Image" src={course.image.url} alt={course.image.alt} />
      </div>
      <button className="btn-like" onClick={LikedFun}>
        {isliked ? (
          <FavoriteIcon style={styles} />
        ) : (
          <FavoriteBorderIcon style={styles} />
        )}
      </button>
      <div className="heading">
        <h1>{course.title}</h1>
      </div>
      <div className="description">
        {course.description.length == 150
          ? course.description
          : course.description.slice(0, 150)}
        ....
      </div>
    </div>
  );
};
export default Card;
