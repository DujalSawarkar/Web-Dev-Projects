import React from "react";
import { useParams } from "react-router-dom";

const New = () => {
  const { categoryId } = useParams();

  return <div>{categoryId}</div>;
};

export default New;
