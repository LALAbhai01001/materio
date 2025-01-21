import axios from "axios";


export const RegisterUser = async(userData) => {
    const response = await axios.post("http://localhost:3007/user/post-user" , userData);


    // Save  to the localstorage in browser

    if(response.data)
        localStorage.setItem("user" ,JSON.stringify(response.data));


    return response.data;

    
}


export const verifyOTP = async(otpData , token) => {

    // combine token in proper structure

    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    
    
    
    const response = await axios.post(
      `http://localhost:3007/user/verify-otp`,
      otpData,
      config
    );


    return response.data;
    
    
}