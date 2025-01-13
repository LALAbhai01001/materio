import React from "react";
import { IoLogoFirebase } from "react-icons/io5";
import { Team_data } from "../data/Team_data";
import SingleTeam from "./Single/SingleTeam";
import PricePlane from "./PricePlane";

const Team = () => {
  return (
    <>
      <div className="container text-center py-4">
        <div className="d-flex gap-2 my-3 justify-content-center align-items-center">
          <IoLogoFirebase />
          <h6 className="m-0 text-secondary text-uppercase">Our Great Team</h6>
        </div>
        <h3 className="my-2">
          <span className="fw-bold">Supported</span>
          by Real People
        </h3>
        <p className="text-secondary my-4">
          Who is behind these great-looking interfaces?{" "}
        </p>

         <div className="d-flex row my-4">
        {Team_data?.map((items,index)=>{
          return <SingleTeam key={index} {...items} />
        })}
        </div>
        
        
      </div>

      <PricePlane/>
    </>
  );
};

export default Team;
