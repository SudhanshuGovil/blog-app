import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="border border-gray-300"></div>
      <Outlet />
    </div>
  );
};

export default Root;
