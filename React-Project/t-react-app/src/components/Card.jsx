import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import "./card.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const styles = {
    fontSize: "30px",
  };
  const FavCourse = props.FavCourse;
  let course = props.course;
  // console.log(course);
  const [isliked, setisliked] = useState(false);
  // console.log(course);
  // console.log(FavCourse);
  const LikedFun = () => {
    setisliked((prev) => !prev);
    FavCourse.push(course);
    console.log(FavCourse);
    isliked ? toast.error("unliked") : toast.success("liked");
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
