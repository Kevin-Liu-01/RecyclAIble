import React from "react";
import CountUp from "react-countup";

function DbCounter(props) {
  return (
    <div className="col-span-2 relative flex justify-center  bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-2xl  drop-shadow-lg  overflow-hidden ">
      <div className=" bg-[url('../assets/recycling.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

      <div className="justify-center mx-auto z-10">
        <div className="mx-4 text-3xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-4xl text-center mt-12 ">
          How many items have you thrown away?
        </div>
        <div className="mb-9 relative flex mx-auto justify-center mt-9 drop-shadow-lg text-plantGreenLight h-48 w-48 md:h-64 md:w-64 text-2xl md:text-4xl leading-8 font-bold tracking-tight  bg-plantGreen border-4 border-plantGreenLight rounded-[50%] overflow-hidden">
          <div className="flex place-content-center bg-[url('../assets/trashcan.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

          <div className="z-20 text-center my-auto relative">
            <CountUp
              className="mr-1 text-white"
              end={props.recycled + props.disposed}
            />{" "}
            items!
          </div>
        </div>
      </div>
    </div>
  );
}

export default DbCounter;
