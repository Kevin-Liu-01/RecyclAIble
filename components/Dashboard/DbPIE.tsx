import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function DbCounter(props) {
  return (
    <div className="col-span-6 lg:col-span-3 relative flex justify-center  bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-3xl  drop-shadow-lg  overflow-hidden ">
      <div className=" bg-[url('../assets/recyclingSymbols.jpg')] bg-contain opacity-30 h-full w-full absolute "></div>

      <div className="justify-center mx-auto z-10">
        <div className="mx-4 text-3xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-4xl text-center mt-12 ">
          Recycled : Trashed Ratio
        </div>
        <div className="mb-9 relative flex mx-auto justify-center mt-8 drop-shadow-lg text-plantGreenLight h-48 w-48 lg:h-96 lg:w-96 bg-plantGreen border-4 border-plantGreenLight rounded-[50%] overflow-hidden hover:scale-105 transition duration-200 ease-in-out">
          <div className="flex place-content-center bg-[url('../assets/trashcan.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

          <div className="z-10 h-full w-full ">
            <PieChart
              label={(props) => {
                return props.dataEntry.title;
              }}
              className="font-extrabold text-xl "
              labelStyle={{
                fontSize: "6px",
                fill: "black",
              }}
              data={[
                {
                  title:
                    "Recycled: " +
                    (props.recycled == 0 && props.disposed == 0
                      ? "No Data"
                      : Math.trunc(
                          (props.recycled / (props.recycled + props.disposed)) *
                            100
                        ) + "%"),
                  value:
                    (props.recycled && props.disposed) == 0
                      ? 50
                      : props.recycled,
                  color: "#E38627",
                },
                {
                  title:
                    "Trashed: " +
                    (props.recycled == 0 && props.disposed == 0
                      ? "No Data"
                      : Math.trunc(
                          (props.disposed / (props.recycled + props.disposed)) *
                            100
                        ) + "%"),

                  value:
                    (props.recycled && props.disposed) == 0
                      ? 50
                      : props.disposed,
                  color: "#C13C37",
                },
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
