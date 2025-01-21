import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { userReset, verifyOTPData } from "../../features/users/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function App() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const {user , userError , userSucess ,userMessage} = useSelector((state)=>state.user)

  const dispatch = useDispatch();



  useEffect(()=>{
    if(userError){
      toast.error(userMessage)
    }
    if(userSucess){
      toast.success(`${user?.username} Your OTP Verification Complete `);
      navigate('/admin/dashboard')
    }

    dispatch(userReset());
    
  },[userError, userSucess])
  
  

  const handleOTP = ()=>{
    dispatch(verifyOTPData({otp}))
  }



  

  return (
    <>
    <div className="conatiner min-vh-100 bg-dark d-flex justify-content-center align-items-center">
      <div className="card shadow border-0 col-lg-5 col-md-6 p-5">
    <h3 className="text-center my-3">
      Enter Verification Code
    </h3>
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      inputStyle={{
        width: '100%',
        height: '70px',
        fontSize:'30px',
        border: '2px solid lightgray',
        borderRadius: '10px'
      }}
      />

      <div className="d-flex mt-4 gap-3 justify-content-center align-items-center">
        <button className="btn btn-danger p-3">
          Clear
        </button>
        <button onClick={handleOTP} className="btn btn-success p-3">
          Verify
        </button>
      </div>
      
      </div>
      </div>
      </>
  );
}
