import { Button } from "@mui/material";
import React from "react";

export const SinglePricePlane = ({
  name,
  price,
  time,
  discount,
  rightarrow,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  hr,
  support,
  supportemail,
  supporttime,
  button,
}) => {
  return (
    <>
      <div className="col-lg-4 my-2">
        <div className="card p-3 shadow">

          <h5>{name}</h5>

          <div className="d-flex justify-content-start gap-2 my-3 align-items-center">
            <h1 className="fw-bold">${price}</h1>

            <div className="d-flex flex-column justify-content align-items-start">
              <p className="m-0">{time}</p>
              <p className="text-secondary" style={{ fontSize: "12px" }}>
                {discount}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <p className="m-0 fs-3">{rightarrow}</p>
            <p className="fw-bold m-0">{title1}</p>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <p className="m-0 fs-3">{rightarrow}</p>
            <p className="fw-bold m-0">{title2}</p>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <p className="m-0 fs-3">{rightarrow}</p>
            <p className="fw-bold m-0">{title3}</p>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <p className="m-0 fs-3">{rightarrow}</p>
            <p className="fw-bold m-0">{title4}</p>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <p className="m-0 fs-3">{rightarrow}</p>
            <p className="fw-bold m-0">{title5}</p>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <p className="m-0 fs-3">{rightarrow}</p>
            <p className="fw-bold m-0">{title6}</p>
          </div>
          {hr}

            <div className="d-flex justify-content-between align-items-center">

            <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="fw-semibold m-0">
                {support}
            </p>
            <p className="m-0 text-secondary">
                {supportemail}
            </p>
            </div>
            <div className="py-2 text-purple px-2 text-sm bg-dark-purple rounded-pill">
                {supporttime}
            </div>
            </div>


            <button className="btn btn-primary my-2">
                {button}
            </button>
            
        </div>
      </div>
    </>
  );
};

export default SinglePricePlane;
