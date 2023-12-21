import React, { useEffect, useState } from "react";
import { getdata } from "../Data";

export const Item = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await getdata();
    setData(res);
  }, []);
  return (
    <div>
      {data?.map((e) => (
        <div className="">{e.title}</div>
      ))}
    </div>
  );
};
