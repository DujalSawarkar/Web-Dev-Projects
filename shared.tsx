import React from "react";
const Shared = () => {
  return (
    <div className="h-5/6 w-full mb-28 mt-28">
      <div className="h-4/6 w-10/12 m-auto ">
        <div className="">
          <h2 className="text-indigo-900 font-inter text-4xl font-bold mb-2">
            Welcome, Arjun
          </h2>
          <p className="text-Black font-inter text-1xl font-normal mb-5">
            Here’s your progress so far
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="w-3/12 h-41 rounded-md bg-gray-100 p-4">
            <p className="text-Black font-inter text-lg font-semibold mb-2">
              Your Learning Progress
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 rgba(217, 217, 217, 1)">
              <div
                className="bg-blue-600 h-2.5 rounded-full w-20"
                // style="width: 45%"
              ></div>
            </div>
            <p className="text-Black font-inter text-sm font-normal leading-6">
              Keep up the great work!
            </p>
            <p className="text-Black font-inter text-sm font-normal leading-6">
              You've completed 50% of your current courses.
            </p>
          </div>
          <div className="w-3/12 h-41 rounded-md bg-gray-100 p-4 pr-5">
            <p className="text-Black font-inter text-lg font-semibold mb-2">
              Upcoming Deadlines
            </p>

            <li className="m-0 list-disc  ">
              <span className="text-Black font-inter text-sm font-medium leading-6 ">
                Assignment :
              </span>
              <span className="text-Black font-inter text-sm font-normal leading-6">
                Introduction to Mechatronics - 05/01/2024
              </span>
            </li>
            <li className="m-0 list-disc text-Black ">
              <span className="text-Black font-inter text-sm font-medium leading-6">
                Quiz :
              </span>
              <span className="text-Black font-inter text-sm font-normal leading-6">
                Fundamentals of Machine Learning - 07/01/2024
              </span>
            </li>
          </div>
          <div className="w-3/12 h-41 rounded-md bg-gray-100 p-4 pr-5">
            <p className="text-Black font-inter text-lg font-semibold mb-2">
              Your Profile Snapshot
            </p>
            <div className="flex items-center gap-3 pb-3" >

              <img src="/diamond.png" alt="#" />
              <p className="text-Black font-inter text-sm font-light leading-6 ">Recently Earned Badge!</p>
            </div>
            <li className="m-0 list-disc  ">
              <span className="text-Black font-inter text-sm font-medium leading-6 ">
                Badges Earned:
              </span>
              <span className="text-Black font-inter text-sm font-normal leading-6">
                5
              </span>
            </li>
            <li className="m-0 list-disc text-Black ">
              <span className="text-Black font-inter text-sm font-medium leading-6">
                Achievements:
              </span>
              <span className="text-Black font-inter text-sm font-normal leading-6">
                12
              </span>
            </li>
          </div>
          <div className="w-3/12 h-41 rounded-md bg-gray-100 p-4 pr-5">
            <p className="text-Black font-inter text-lg font-semibold mb-2">
              Latest Announcements
            </p>

            <li className="m-0 list-disc  ">
              <span className="text-Black font-inter text-sm font-medium leading-6 ">
                Exciting new course added :
              </span>
              <p className="text-Black font-inter text-sm font-normal leading-6 ml-6">
                "Advanced Robotics."
              </p>
            </li>
            <li className="m-0 list-disc text-Black ">
              <span className="text-Black font-inter text-sm font-medium leading-6 ">
                New Resources added in :
              </span>
              <p className="text-Black font-inter text-sm font-normal leading-6 ml-6">
                Android Development
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shared;
