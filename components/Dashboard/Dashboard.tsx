import { ClockIcon, UserIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../Navbar/Navbar";
import DBHeader from "./DbHeader";
import DBCounter from "./DbCounter";
import DBPIE from "./DbPIE";
import DBMetrics from "./DbMetrics";
import DbLast from "./DbLastItem";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [itemsRecycled, setItemsRecycled] = useState(74);
  const [itemsDisposed, setItemsDisposed] = useState(88);
  const [data, setData] = useState([
    [1, "bottle", "yes"],
    [2, "can", "yes"],
    [3, "hat", "no"],
  ]);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  useEffect(() => {
    axios
      .get("https://402c-128-91-56-203.ngrok.io/sendUIdata")
      .then((response) => {
        console.log(`/client/ returned response from host: `, response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b to-plantGreenDarker from-plantGreenDark  pb-14 ">
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
