import React from "react";
import Shared from "@/app/(student dashboard)/(components)/shared";
import CourseCard from "./(components)/courseCard";
import { SwiperComponent } from "./(components)/swiper";

const CourseData = [
  {
    imgUrl: "/courseimage.png",
    title: "Definition of Mechanics",
    subtitle: "Introduction to Mechnical Engineering",
    duration: "35 min",
  },
  {
    imgUrl: "/courseimage.png",
    title: "Definition of Mechanics",
    subtitle: "Introduction to Mechnical Engineering",
    duration: "35 min",
  },
];

const inrollCourse = [
  {
    imgUrl: "/courseimage2.png",
    title: "Artificial Intelligence and Data Science",
    year: "3rd Year",
    sub: "4 Subject",
    description:
      "Explore a curated selection of courses tailored to your academic journey in AIDS Branch during your 2024. Immerse yourself in subjects like CN, OOPS, and more, designed to provide a comprehensive understanding of your chosen field. From Course 1 to Course 3, each course is crafted.",
  },
];
const page = () => {
  return (
    <div>
      <Shared />
      <hr />

      <div className="m-28">
        <p className="font-inter text-2xl font-semibold leading-7 tracking-normal text-left mb-5">
          Continue Your Learning Adventure
        </p>
        <div className="flex  items-start gap-5 ">
          {CourseData.map((card) => (
            <CourseCard data={card} />
          ))}
        </div>
      </div>

      <div className="m-28">
        <p className="font-inter text-2xl font-semibold leading-7 tracking-normal text-left mb-8">
          Your Enrolled Courses
        </p>

        <div>
          {inrollCourse.map((Course) => (
            <div className="flex w-11/12 gap-8">
              <img src={`${Course.imgUrl}`} alt="#" />
              <div>
                <p className="font-inter text-xl font-semibold leading-6 tracking-normal text-left pb-2">
                  {Course.title}
                </p>
                <p className="font-inter text-indigo-800 text-ls font-semibold leading-5 tracking-normal text-left pb-2">
                  {Course.year}
                </p>
                <p className="font-inter text-ls font-medium leading-5 tracking-normal text-left pb-2">
                  {Course.sub}
                </p>
                <p className="font-inter text-lg  leading-8">
                  {Course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="m-28">
        <p className="font-inter text-2xl font-semibold leading-7 tracking-normal text-left mb-20 ">
          Personalized Recommendations for You
        </p>

        <SwiperComponent />
      </div>
      <div className="m-28">
        <p className="font-inter text-2xl font-semibold leading-7 tracking-normal text-left mb-20 ">
          Explore What's Trending
        </p>

        <SwiperComponent />
      </div>
    </div>
  );
};
export default page;
