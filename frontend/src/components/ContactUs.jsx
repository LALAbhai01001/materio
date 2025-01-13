import { Button } from "@mui/material";
import React from "react";
import { IoLogoFirebase } from "react-icons/io5";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="col-11 mx-auto">
            <div className="top text-center">

          <div className="d-flex gap-2 my-3 justify-content-center align-items-center">
            <IoLogoFirebase />
            <h6 className="m-0 text-secondary text-uppercase">Contact Us</h6>
          </div>
          <h3 className="my-2">
            <span className="fw-bold">Lets work</span>
            together
          </h3>
          <p className="text-secondary my-4">
            Any question or remark? just write us a message
          </p>
            </div>

          <div className="row">
            <div className="col-lg-5 ">
                <div className="card p-2 bg-purple text-white">

              <p>Let's contact with us</p>
              <h5 className="fw-semibold">
                Share your ideas or requirement with our experts.
              </h5>
              <img
                src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/chat.png"
                alt="" width='100%'
                />
              <p>Looking for more customisation, more features, and more anything? Don't worry, We've provide you with an entire team of experienced professionals.</p>
                </div>
            </div>

            <div className="col-lg-7">
                <div className="card shadow border-0 p-4">
                    <h6>Share your ideas</h6>
                    <form action="">
                        <div className="row my-4">
                            <div className="col-lg-6">
                        <input type="text"
                        placeholder="Full name"
                        className="form-control"
                        />
                        </div>
                        <div className="col-lg-6">
                            <input type="text"
                            placeholder="Email address"
                            className="form-control"
                            />
                        </div>
                        </div>

                        <textarea name="" placeholder="Message" 
                        className="form-control my-2"
                        id=""></textarea>
                        
                        <button type="button" className="btn my-1 text-white bg-purple">
                            Send Inquiry
                        </button>
                        
                    </form>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
