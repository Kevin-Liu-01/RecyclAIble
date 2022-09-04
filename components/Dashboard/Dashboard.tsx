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
  const [itemsRecycled, setItemsRecycled] = useState(0);
  const [itemsDisposed, setItemsDisposed] = useState(0);
  const [dataArrays, setData] = useState([[]]);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "ngrok-skip-browser-warning": "true",
    },
  };

  useEffect(() => {
    axios
      .get("https://c37d-128-91-19-1.ngrok.io/sendUIdata", config)
      .then((response) => {
        console.log("successful retreival");
        console.log(`/client/ returned response from host: `, response.data);
        setData(response.data);
        console.log("the data: ", dataArrays);
        setItemsRecycled(dataArrays.filter((x) => x.includes("yes")).length);
        setItemsDisposed(dataArrays.filter((x) => x.includes("no")).length);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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

        <DbLast
          data={dataArrays}
          recycled={itemsRecycled}
          disposed={itemsDisposed}
        />
        {/* To be named */}
        <DBPIE recycled={itemsRecycled} disposed={itemsDisposed} />

        {/* To be named */}
        <DBMetrics recycled={itemsRecycled} disposed={itemsDisposed} />
      </div>
    </div>
  );
}

export default Home;
