import axios from "axios";
import React, { useState } from "react";

const New = () => {
  const [data, setdata] = useState({});
  const onChange = (e) => {
    setdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    if (data.discount === null && !data.discountPercent) {
      const { discount, discountPercent, ...rest } = data;

      setdata(rest);
    }

    e.preventDefault();
    const result = await axios.post("http://localhost:3000/items/create", {
      ...data,
    });
    console.log(result);
  };
  return (
    <>
      <form
        className="w-full flex items-center justify-center flex-col gap-4"
        onSubmit={onSubmit}
      >
        <input
          className="p-5 bg-slate-500/5"
          onChange={onChange}
          name="title"
          placeholder="title"
          type="text"
        />
        <input
          className="p-5 bg-slate-500/5"
          onChange={onChange}
          name="price"
          placeholder="price"
          type="number"
        />
        <input
          className="p-5 bg-slate-500/5"
          onChange={onChange}
          name="discount"
          placeholder="discount"
          type="number"
        />
        <input
          className="p-5 bg-slate-500/5"
          onChange={onChange}
          name="discountPercent"
          placeholder="dissPercent"
          type="text"
        />
        <input
          className="p-5 bg-slate-500/5"
          onChange={onChange}
          name="rate"
          placeholder="rate"
          type="number"
        />
        <input
          className="p-5 bg-slate-500/5"
          onChange={onChange}
          name="imageUrl"
          placeholder="image_url"
          type="text"
        />
        <input
          className="p-5 bg-slate-500/5"
          onChange={onChange}
          name="category"
          placeholder="category"
          type="text"
        />
        <input
          className="p-5 bg-slate-500/5"
          onChange={onChange}
          name="item_type"
          placeholder="Item Type"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default New;
