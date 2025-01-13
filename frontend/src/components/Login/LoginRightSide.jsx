import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import SocialIcon from "../SocialIcon";

const LoginRightSide = () => {
    const [showPass , setShowPass] = useState(false);
  
  return (
    <>
      <div className="height-full d-flex flex-column py-3">
        <h3>Welcome to Materio!👋🏻</h3>
        <p>Please sign-in to your account and start the adventure</p>
        <form action="" className="p-4">
          {/* <input
            type="text"
            placeholder="Username"
            className="form-control my-2"
          /> */}
          <TextField
            type="email"
            id="email"
            className="w-100 my-2"
            label="Email"
            variant="outlined"
          />

          <div style={{ position: "relative", width: "100%" }}>
            <TextField
              type={`${showPass ? "text" : "password"}`}
              id="password"
              className="my-2 w-100"
              label="Password"
              variant="outlined"
            />

            {showPass ? (
              <FaEyeSlash
                onClick={() => setShowPass(false)}
                size={20}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "15px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
            ) : (
              <FaEye
                onClick={() => setShowPass(true)}
                size={20}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "15px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
            )}
          </div>

          <button
            type="button"
            className="btn bg-purple w-100 my-3 mx-auto text-white fw-semibold"
          >
            Log In
          </button>
        </form>
        <p>
          New on our platform?{" "}
          <span>
            <a href="/admin/signup" className="text-decoration-none text-purple">
              create an acount
            </a>
          </span>{" "}
        </p>

        <div className="col-11 mx-auto">
          <div className="d-flex">
            <hr
              style={{
                width: "45%",
              }}
            />
            <span>or</span>
            <hr
              style={{
                width: "45%",
              }}
            />
          </div>

          <SocialIcon/>
          
        </div>
      </div>
    </>
  );
};

export default LoginRightSide;
