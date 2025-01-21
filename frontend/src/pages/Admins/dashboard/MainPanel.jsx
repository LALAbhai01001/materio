import React from "react";
import Sidebar from "./Components/AdminSidebar";
import "./dashboard.css";



const MainPanel = () => {
  return (
    <>
      <div
        className="row height-full "
        style={{
          backgroundColor: "#F4F5FA",
        }}
      >
        <div className="col-xl-3 col-lg-4 col-md-5">
          <Sidebar />
        </div>
        <div className="col-xl-9 col-lg-8 col-md-7"></div>
      </div>
    </>
  );
};

export default MainPanel;
