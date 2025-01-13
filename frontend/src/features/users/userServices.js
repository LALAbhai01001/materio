import axios from "axios";


export const RegisterUser = async(userData) => {
    const response = await axios.post("http://localhost:3007/user/post-user" , userData);


    // Save  to the localstorage in browser

    if(response.data)
        localStorage.setItem("user" ,JSON.stringify(response.data));


    return response.data;
    
}