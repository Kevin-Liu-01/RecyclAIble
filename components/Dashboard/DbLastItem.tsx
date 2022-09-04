import React from "react";
import { useState } from "react";

function DbLast(props) {
  const [effect, setEffect] = useState(true);

  let lastElement = props.data[props.data.length - 1];

  function onCall() {
    props.setUpdate(!props.update);
    setEffect(true);
  }
  return (
    <div className="col-span-6 lg:col-span-3  relative flex justify-center  bg-gradient-to-b to-plantGreenDark from-plantGreen rounded-3xl  drop-shadow-lg  overflow-hidden ">
      <div className=" bg-[url('../assets/jungle-bg.jpg')] bg-contain opacity-20 h-full w-full absolute "></div>

      <div className="justify-center mx-auto z-10">
        <div className="mx-4 px-4 text-3xl leading-8 font-extrabold tracking-tight text-plantGreenLight sm:text-4xl text-center mt-12 ">
          Your last item was:
        </div>
        <div
          onClick={() => onCall()}
          className={`${
            effect && "animate-wiggle"
          }  h-48 w-48 lg:h-96 lg:w-96 hover:scale-105 transition duration-200 ease-in-out px-4 mb-9 relative flex mx-auto justify-center mt-9 drop-shadow-lg text-plantGreenLight  text-2xl lg:text-4xl leading-8 font-bold tracking-tight  bg-plantGreenDark border-4 border-plantGreenLight rounded-[50%] overflow-hidden`}
          onAnimationEnd={() => setEffect(false)}
        >
          <div
            className={
              lastElement[2] == "yes"
                ? "flex place-content-center bg-[url('../assets/recyclingcontainer.jpg')] bg-cover opacity-30 h-full w-full absolute "
                : "flex place-content-center bg-[url('../assets/disposed.jpg')] bg-cover opacity-30 h-full w-full absolute "
            }
          ></div>

          <div className="z-20 text-center my-auto relative lg:text-5xl font-extrabold select-none">
            {lastElement[1] == "yes" ? "Recycled" : "Trashed"}
            <div className="z-20 mt-2 font-[600] text-center block my-auto relative  text-sm select-none">
              Tap to update the site.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DbLast;
