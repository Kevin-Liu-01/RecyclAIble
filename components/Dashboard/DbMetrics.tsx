import { truncate } from "fs";
import React from "react";
import CountUp from "react-countup";

function DbCounter(props) {
  return (
    <div className="col-span-6 lg:col-span-3 relative flex justify-center  bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-3xl  drop-shadow-lg  overflow-hidden ">
      <div className=" bg-[url('../assets/leaves-bg.jpg')] bg-contain opacity-20 h-full w-full absolute "></div>

      <div className="justify-center  z-10">
        <div className="mx-4 text-3xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-4xl text-center mt-12 ">
          Global Recycling Metrics
        </div>
        <div className="mb-9 mx-8 relative grid grid-cols-6 gap-4 px-4 py-4 rounded-3xl  mt-9 drop-shadow-lg text-plantGreenLight   leading-8 font-bold tracking-tight  bg-plantGreen border-4 border-plantGreenLight overflow-hidden">
          <div className="z-10 flex place-content-center bg-[url('../assets/trashcan.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

          <div className="relative z-20 col-span-6 lg:col-span-3 ">
            <div className="bg-gradient-to-b to-plantGreenDark from-plantGreen relative border-4 rounded-3xl p-4 overflow-hidden">
              <div className="  bg-[url('../assets/americans.jpg')] bg-cover opacity-20 mt-[-1rem] ml-[-1rem] h-full w-full absolute "></div>
              <div className="relative text-5xl inline z-20 text-white">
                32.1%{" "}
              </div>
              <div className="lg:text-2xl text-xl inline">
                of Americans recycle{" "}
              </div>
              <div className="text-sm inline">(2018)</div>.
            </div>
            <div className="bg-gradient-to-b to-plantGreenDark from-plantGreen relative z-20 border-4 rounded-3xl p-4 mt-4 ">
              <div className="  bg-[url('../assets/americans3.jpg')] bg-cover opacity-20 mt-[-1rem] ml-[-1rem] h-full w-full absolute "></div>

              <div className="text-2xl">
                Americans recycle
                <div className="relative text-4xl inline text-white z-20">
                  {" "}
                  2072
                </div>{" "}
                pounds of trash each year{" "}
                <div className="text-sm inline">(2018)</div>.
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b to-plantGreenDark from-plantGreen relative z-20 col-span-6 lg:col-span-3 border-4 rounded-3xl p-4 pverflow-hidden flex grow">
            <div className="  bg-[url('../assets/americans2.jpg')] bg-cover opacity-20 mt-[-1rem] ml-[-1rem] h-full w-full absolute "></div>

            <div className="text-1xl lg:text-3xl">
              The average American only recycles around{" "}
              <div className="relative text-5xl inline text-white z-20">
                4.52
              </div>{" "}
              pounds of trash per day
              <div className="text-sm inline"> (2018)</div>.
            </div>
          </div>
          <div className="col-span-6 my-4 text-2xl lg:text-4xl">
            You recycled{" "}
            <div className="relative z-20 text-3xl lg:text-5xl inline text-white">
              {Math.trunc((props.recycled / 4.52) * 10)}%
            </div>{" "}
            more than the average American.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DbCounter;
