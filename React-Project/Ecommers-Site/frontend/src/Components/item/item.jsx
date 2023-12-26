import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RouteCard from "../routeCard/routeCard";
export const Item = () => {
  const { itemId } = useParams();
  const [itemData, setItemData] = useState({});
  const itemDatabyID = async (itemId) => {
    const { data } = await axios.get(`http://localhost:3000/items/${itemId}`);
    setItemData(data);
  };
  useEffect(() => {
    itemDatabyID(itemId);
  }, []);
  console.log(itemData);
  return (
    <div>
      <RouteCard />
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
