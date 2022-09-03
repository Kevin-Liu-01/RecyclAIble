import { DesktopComputerIcon, VariableIcon } from "@heroicons/react/outline";
import Navbar from "./Navbar/Navbar";
import React from "react";

function About() {
  return (
    <div className="min-h-screen ">
      {/*header section*/}

      <div className="bg-white  items-center">
        {/*Navbar*/}
        <Navbar page="About" />
        <div className="bg-gradient-to-b to-gray-500"></div>
      </div>
      {/*header section 2*/}

      <div className=" bg-gradient-to-b to-plantGreenDarker from-plantGreenDark  pb-12 ">
        <div className="mx-10 md:mx-16">
          <div className="pt-8">
            <h2 className="text-lg font-semibold text-plantGreen">About Us</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-plantGreenLighter sm:text-4xl">
              Our Mission
            </p>
            <p className="mt-4 max-w-5xl text-xl text-plantGreenLight ">
              To be determined.
            </p>
          </div>
          <div className="max-w-7xl mx-auto border border-x-0 border-t-0 border-b-2 border-gray-300 mt-10"></div>
          <div className="mt-12 rounded-xl">
            <dl className=" mx-auto max-w-7xl m-4 space-y-10 md:grid md:grid-rows-3 md:gap-x-4 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-plantGreen text-plantGreenLight">
                    <VariableIcon />
                  </div>
                  <p className="ml-16 text-xl font-medium leading-6 text-plantGreenLight">
                    TBD
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-plantGreenLight">
                  TBD
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
