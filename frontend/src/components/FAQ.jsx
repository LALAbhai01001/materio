import React from "react";
import { IoLogoFirebase } from "react-icons/io5";
import { FAQ_data } from "../data/FAQ_data";
import SingleFAQ from "./Single/SingleFAQ";
import GetStarted from "./GetStarted";

const FAQ = () => {
  return (
    <>
      <div className="container my-3 text-center  ">
        <div className="d-flex my-3 gap-2 justify-content-center align-items-center">
          <IoLogoFirebase />
          <h6 className="m-0 text-secondary text-uppercase">Faq</h6>
        </div>
        <h3 className="my-2">
          Frequently asked
          <span className="fw-bold"> questions</span>
        </h3>
        <p className="text-secondary my-4">
          Browse through these FAQs to find answers to commonly asked questions.
        </p>

        <div className="row">
          <div className="col-lg-5">
            <img
              src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/sitting-girl-with-laptop.png"
              alt="" width='80%'
            />            
          </div>

            <div className="col-lg-7">
                {FAQ_data?.map((items,index)=>{
                    return <SingleFAQ {...items} key={index} />
                })}
            </div>

          
        </div>
      </div>   


        <GetStarted />
      
    </>
  );
};

export default FAQ;
