import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function DbCounter() {
  return (
    <div className="col-span-3 relative flex justify-center  bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-2xl  drop-shadow-lg  overflow-hidden ">
      <div className=" bg-[url('../assets/recyclables.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

      <div className="justify-center mx-auto z-10">
        <div className="mx-4 text-3xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-4xl text-center mt-12 ">
          Recycled: Non-Recycled Distribution
        </div>
        <div className="mb-9 relative flex mx-auto justify-center mt-9 drop-shadow-lg text-plantGreenLight h-48 w-48 md:h-96 md:w-96 bg-plantGreen border-4 border-plantGreenLight rounded-[50%] overflow-hidden">
          <div className="flex place-content-center bg-[url('../assets/trashcan.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

          <div className="z-10 h-full w-full my-auto">
            <PieChart
              data={[
                {
                  title: "One",
                  label: "hi",
                  labelPosition: 50,
                  value: 10,
                  color: "#E38627",
                },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
}

export default DbCounter;
