"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import course from "@/public/bg6.png";

export const SwiperComponent = () => {
  const courseArray = [
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
    {
      img: course,
      title: "Introduction to Mechanical Engineering",
      mentor: "Dr. Girish Gaikwad",
      desc: "Get an Introdcution to mechanical engineering and its subjects and its scope and its purpose in life.",
    },
  ];

  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          cssMode={true}
          loop={true}
          mousewheel={true}
          navigation={{
            nextEl: ".button-next-course",
            prevEl: ".button-prev-course",
          }}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper "
        >
          {courseArray.map((course, index) => (
            <div className="w-screen ">
              <SwiperSlide>
                <div
                  key={index}
                  className=" shadow-inner border-2 bg-white w-[250px] h-96 p-6 rounded-lg transition-border duration-500 ease-in-out overflow-y-hidden "
                >
                  <Image
                    src={course.img}
                    alt={"Image for the course"}
                    width={250}
                    height={187}
                    className="rounded-md border border-solid border-primary-color bg-cover bg-center bg-no-repeat relative"
                  />
                  <h2 className="text-xl font-bold mb-2 my-2 ">
                    {course.title}
                  </h2>
                  <p className="text-primary font-Inter text-base font-light leading-[1.6] my-1">
                    {course.mentor}
                  </p>
                  <p className="text-Black font-Inter text-xs font-normal leading-[1.6]">
                    {course.desc}
                  </p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        
      </div>
    </>
  );
};
