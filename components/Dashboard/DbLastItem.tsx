import React from "react";
import CountUp from "react-countup";

function DbLast(props) {
  return (
    <div className="col-span-6  relative flex justify-center  bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-3xl  drop-shadow-lg  overflow-hidden ">
      <div className=" bg-[url('../assets/jungle-bg.jpg')] bg-contain opacity-20 h-full w-full absolute "></div>

      <div className="justify-center mx-auto z-10">
        <div className="mx-4 px-4 text-3xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-4xl text-center mt-12 ">
          Your last item was:
        </div>
        <div className="hover:scale-105 transition duration-200 ease-in-out px-4 mb-9 relative flex mx-auto justify-center mt-9 drop-shadow-lg text-plantGreenLight h-48 w-48 lg:h-72 lg:w-72 text-2xl lg:text-4xl leading-8 font-bold tracking-tight  bg-plantGreen border-4 border-plantGreenLight rounded-[50%] overflow-hidden">
          <div className="flex place-content-center bg-[url('../assets/recyclingcontainer.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

          <div className="z-20 text-center my-auto relative lg:text-5xl select-none">
            Recycled
            <div className="z-20 mt-2 font-[600] text-center block my-auto relative lg:text-sm select-none">
              Click to scan a new one!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DbLast;
