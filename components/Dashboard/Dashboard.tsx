import { ClockIcon, UserIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../Navbar/Navbar";
import DBHeader from "./DbHeader";
import DBCounter from "./DbCounter";
import DBPIE from "./DbPIE";
import DBMetrics from "./DbMetrics";
import DbLast from "./DbLastItem";
// import jQuery from "jquery";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [itemsRecycled, setItemsRecycled] = useState(11);
  const [itemsDisposed, setItemsDisposed] = useState(3);
  const [data, setData] = useState([
    [1, "bottle", "yes"],
    [2, "can", "yes"],
    [3, "hat", "yes"],
  ]);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  // useEffect(() => {
  //   function postData(input) {
  //     $.ajax({
  //       type: "POST",
  //       url: "/server.py",
  //       data: { param: input },
  //       success: callbackFunc,
  //     });
  //   }

  //   function callbackFunc(response) {
  //     console.log(response);
  //     setData(response);
  //   }

  //   postData("");
  // }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b to-plantGreenDarker from-plantGreenMidDark  pb-14 ">
      {/*Navbar*/}
      <Navbar page="Dashboard" />
      {/*Dashboard */}

      <div className="py-10 px-7 md:px-16 md:py-16 grid grid-cols-6 gap-5">
        {/*header section */}
        <DBHeader recycled={itemsRecycled} disposed={itemsDisposed} />

        {/* Counter block */}
        <DBCounter recycled={itemsRecycled} disposed={itemsDisposed} />

        <DbLast data={data} recycled={itemsRecycled} disposed={itemsDisposed} />
        {/* To be named */}
        <DBPIE recycled={itemsRecycled} disposed={itemsDisposed} />

        {/* To be named */}
        <DBMetrics recycled={itemsRecycled} disposed={itemsDisposed} />
      </div>
    </div>
  );
}

export default Home;
