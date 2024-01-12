import React from "react";
// type prop = {
//   imgUrl: string;
//   title: string;
//   subtitle: string;
//   duration: string;
// };
const CourseCard = (props) => {
  const data = props.data;
  return (
    <div className="w-64 h-36 rounded-md border border-solid border-gray-300 mb-12">
      <img src={`${data.imgUrl}`} alt="" />
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4 rgba(217, 217, 217, 1)">
        <div
          className="bg-blue-600 h-1 rounded-full w-20"
          // style="width: 45%"
        ></div>
      </div>
      <p className="font-inter text-lg font-semibold leading-6 tracking-normal text-left">
        {data.title}
      </p>
      <p className="font-inter text-indigo-800 text-sm font-light leading-5 tracking-normal text-left">
        {data.subtitle}
      </p>
      <p className="font-inter text-sm font-light leading-5 tracking-normal text-left">
        {data.duration}
      </p>
    </div>
  );
};

export default CourseCard;
