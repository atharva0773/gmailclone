import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Functionsidebar from "./Functionsidebar";

const Body = () => {
  return (
    <div className="flex flex-col h-screen"> 
      <Functionsidebar />
    <div className="flex">


      <Sidebar />
      <div className="flex-1">
        <Outlet /> 
      </div>
    </div>
    </div>
  );
};

export default Body;
