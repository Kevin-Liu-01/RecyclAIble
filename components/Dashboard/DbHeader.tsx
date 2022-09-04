import React from "react";

function HeaderContents(props) {
  return (
    <div className="col-span-6 lg:col-span-4 drop-shadow-lg  bg-gradient-to-b to-plantGreenDark from-plantGreen  rounded-3xl   overflow-hidden">
      <div className=" bg-[url('../assets/forest.jpg')] bg-cover opacity-[0.25] h-full w-full absolute "></div>

      <div className="flex flex-col justify-center z-10">
        <div className="relative z-20 text-opacity-90 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center mt-8 lg:mt-16 select-none  mx-8">
          Welcome to RecycleAI!
        </div>
        {/* Progress Bar*/}
        <div className="col-span-2 text-center mb-14 lg:mb-9 lg:mx-8 mx-6 relative rounded-full  mt-9 drop-shadow-lg text-plantGreenLight   leading-8 font-bold tracking-tight  bg-plantGreenDarker border-4 border-plantGreenLight overflow-hidden">
          <div
            style={{ width: props.recycled.toString() + "%" }}
            className="rounded-full z-10 flex place-content-center bg-[url('../assets/water.jpg')] bg-cover opacity-60 h-full w-full absolute "
          ></div>
          <div className="text-2xl font-bold py-[0.875rem] relative z-20 text-white">
            {props.recycled}/100 Items Recycled
          </div>
        </div>
        <div className="grid mb-9 grid-rows-2 lg:grid-rows-1 grid-cols-2 gap-4">
          {/* other stats*/}
          <div className="relative overflow-hidden col-span-2 lg:col-span-1 border-plantGreenLight border-4 mx-6 lg:mx-0 lg:ml-8 drop-shadow-lg  bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-3xl lg:mr-1">
            <div className=" bg-[url('../assets/bottlesrecycled.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

            <div className="relative mb-6 z-20 text-plantGreenLight px-4 lg:pt-4 text-center grid grid-rows-2 gap-2">
              <div className="text-3xl font-extrabold  mt-2">
                Items Recycled:
              </div>
              <div className="text-5xl  font-extrabold text-white">
                {props.recycled}
              </div>
            </div>
          </div>
          {/*Disposed */}
          <div className="relative overflow-hidden col-span-2 lg:col-span-1 border-plantGreenLight border-4 mx-6 lg:mx-0 lg:mr-8 drop-shadow-lg  bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-3xl lg:ml-1">
            <div className=" bg-[url('../assets/disposeditems.jpg')] bg-cover opacity-20 h-full w-full absolute "></div>

            <div className="relative mb-6 z-20 text-plantGreenLight px-4 lg:pt-4 text-center grid grid-rows-2 gap-2">
              <div className="text-3xl font-extrabold mt-2 ">
                Items Trashed:
              </div>
              <div className="text-5xl font-extrabold text-white">
                {props.disposed}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContents;
