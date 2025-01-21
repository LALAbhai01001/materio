import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import SocialIcon from "../SocialIcon";
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import { RegisterUserData, userReset } from "../../features/users/userSlice";
import toast from "react-hot-toast";
import {ScaleLoader} from 'react-spinners';
import { useNavigate } from "react-router-dom";





const SignUpRightSide = () => {

  const [showPass , setShowPass] = useState(false);
  
  const [formFeids, setFormFeilds] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formFeids;

  const handleChange = (e) => {
    setFormFeilds({
      ...formFeids,
      [e.target.name]: e.target.value,
    });
  };
  
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {userError , userMessage, userLoader , userSucess ,user} =  useSelector((state)=> state.user)
  
  
  
  useEffect(()=>{
    if(userError){
      toast.error(userMessage)
    }

    if(userSucess){
      toast.success(` welcome ${user?.username}`);
      navigate(`/admin/otp/${user?. _id}`)
    }

    dispatch(userReset())
    
    
  },[userError, userSucess ,userMessage]);



  const handleRegistration = async()=>{
    // const response = await axios.post("http://localhost:3007/user/post-user", {username,email,password});
    // console.log(response)
    
    dispatch(RegisterUserData({ email, password, username }));
    
    setTimeout(() => {
      setFormFeilds({
        username: "",
        email: "",
        password: "",
      });
    }, 1000);
    
  }
  
  


  return (
    <>
      <div className="height-full d-flex flex-column py-3">
        <h3>Adventure starts here 🚀</h3>
        <p>Make your app management easy and fun!</p>
        <form action="" className="p-4">
          <TextField
            type="text"
            id="username"
            className="w-100 my-2"
            label="Username"
            variant="outlined"
            name="username"
            onChange={handleChange}
            value={username}
          />

          <TextField
            type="email"
            id="email"
            className="w-100 my-2"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            value={email}
          />

          <div style={{ position: "relative", width: "100%" }}>
            <TextField
              type={`${showPass ? "text" : "password"}`}
              id="password"
              className="my-2 w-100"
              label="Password"
              variant="outlined"
              name="password"
              onChange={handleChange}
              value={password}
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
            disabled= {userLoader}
            onClick={handleRegistration}
            type="button"
            className={`btn  ${
              userLoader ? "bg-secondary" : "bg-purple"
            } w-100 mx-auto text-white fw-semibold`}
          >
            {userLoader ? (
              <ScaleLoader color="white" height={15} />
            ) : (
              "Sign UP"
            )}
          </button>
        </form>
        <p className="m-0">
          Already have an account?
          <span>
            <a href="/admin/login" className="text-decoration-none text-purple">
              Sign in instead
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

          <SocialIcon />
        </div>
      </div>
    </>
  );
};

export default SignUpRightSide;
