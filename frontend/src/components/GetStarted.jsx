import { Button } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const GetStarted = () => {
  return (
    <>
      <div
        className="container-fluid pt-5"
        style={{
          background: "linear-gradient(to right, #ECEEF5, #E9D2E5)",
        }}
      >
        <div className="row align-items-center col-lg-11 mx-auto">
          <div className="col-lg-6">
            <h2 className="text-purple">Ready to Get Started?</h2>
            <p className=" text-secondary">
              Start your project with a 14-day free trial
            </p>
            <Button variant="contained">
              Get Started <FaArrowRight />
            </Button>
          </div>
          <div className="col-lg-6">
            <img
              src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/crm-dashboard.png"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
