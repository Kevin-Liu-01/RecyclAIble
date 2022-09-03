import { DesktopComputerIcon, VariableIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar/Navbar";
import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-200 pb-10">
      {/*header section*/}

      <div className="bg-white  items-center">
        {/*Navbar*/}
        <Navbar page="About" />
        <div className="bg-gradient-to-b to-gray-500"></div>
      </div>
      {/*header section 2*/}

      <div className="bg-gradient-to-b  from-white to-gray-200  pb-12 ">
        <div className="mx-10 md:mx-16">
          <div className="mx-10 md:mx-16">
            <h2 className="text-lg font-semibold text-plantGreen">About Us</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 ">
              At PlantSTEM we want to bring out the brightest in our students.
              We strive to teach them the concepts that they are going to use in
              their journey to reach the skies. We plant curiosity and provide
              water to quench the student’s thirst for knowledge. At PlantSTEM
              we are committed to teach anyone, regardless of their backgrounds.
            </p>
          </div>
          <div className="max-w-7xl mx-auto border border-x-0 border-t-0 border-b-2 border-gray-300 mt-10"></div>
          <div className="mt-12 rounded-xl">
            <dl className=" mx-auto max-w-7xl m-4 space-y-10 md:grid md:grid-rows-3 md:gap-x-4 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-plantGreen text-white">
                    <VariableIcon />
                  </div>
                  <p className="ml-16 text-xl font-medium leading-6 text-gray-900">
                    Math
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-900">
                  This course prepares students for the AMC 8/10 contest. The
                  course is around AMC 10 level. There will be 4 sections to
                  this class each of which last three weeks. In the first three
                  weeks, we will cover topics in algebra. Through the next three
                  weeks, we will go over counting. The next three weeks will be
                  focused on geometry and we will finish off the last three
                  weeks with number theory. Each class will be 90 minutes long.
                  We plan to use the first 15 minutes correcting homework from
                  the previous week and then we will have a short quiz of 3
                  questions from the previous chapter for the next 15 minutes.
                  For the next hour we wil go over the subject planned for the
                  day the rest of the time. This course is taught by a multiple
                  time AIME qual, and multiple honor roll for AMC 10, and a
                  honor roll in AMC 8. Below attached is the syllabus:
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-plantGreen text-white">
                    <DesktopComputerIcon />
                  </div>
                  <p className="ml-16 text-xl font-medium leading-6 text-gray-900">
                    Computer Science
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-900">
                  This course prepares students to master the language of
                  python. The course will 12 weeks long. Each class will be 90
                  minutes long, and we will use the first 15 minutes for
                  correcting homework. The rest of the 75 minutes will be spent
                  on teaching the new subjects and coding through live examples
                  during class. This course is taught by a USACO gold qualifier
                  and a python expert. Below attached is the syllabus: (I have
                  to add it later)
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center place-content-center rounded-md bg-plantGreen fill-white">
                    <svg viewBox="-45 -45 600 600">
                      <path d="M438.483 372.364h-26.669V158.16C411.814 70.949 340.865 0 253.659 0H86.661C73.809 0 63.389 10.42 63.389 23.273s10.42 23.273 23.273 23.273h13.521v187.988c0 12.853 10.42 23.273 23.273 23.273h39.201a23.267 23.267 0 0 0 16.455-6.817l32.084-32.082v56.076l-97.379 97.381h-40.3c-12.853 0-23.273 10.42-23.273 23.273v93.091c0 12.853 10.42 23.273 23.273 23.273h364.966c12.853 0 23.273-10.42 23.273-23.273v-93.091c0-12.854-10.42-23.274-23.273-23.274zm-187.558-71.285a23.265 23.265 0 0 0 6.817-16.457V162.721a23.27 23.27 0 0 0-14.367-21.501 23.277 23.277 0 0 0-25.363 5.044l-64.996 64.995h-6.288V46.545h106.93c61.541 0 111.61 50.069 111.61 111.614v214.204H179.641l71.284-71.284zM415.21 465.455H96.79V418.91h318.42v46.545z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-xl font-medium leading-6 text-gray-900">
                    Chess
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-900">
                  This course will start off with the first 3 sessions as
                  tryouts to determine the level for the student. Based on their
                  scores on the tryouts, we will split the students into three
                  groups, with ratings 0-600, 600-1000, and 1000-1300. This
                  course is taught by many qualified chess players with ratings
                  over 1500+. The classes for the 0-600 group will be around 45
                  minutes, th 600-1000 group will meet for 60 minutes, and the
                  1000-1300 group will meet for 90 minutes. Below is the
                  syllabus: (I have to add it later)
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
