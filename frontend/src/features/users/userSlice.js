// 1, always imports two things first

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterUser, verifyOTP } from "./userServices";


// check the user to localstorage 

const isUser = JSON.parse(localStorage.getItem("user"));    
// 2, define to the  initail state 

const initialState =  {
    user :isUser ? isUser : null,
    userLoader: false,
    userSucess: false,
    userError: false,
    userMessage: "",
};


// 5, call the service functio  

export const RegisterUserData = createAsyncThunk('register-user' , async(userdata, thunkAPI)=>{
    try {
        return await RegisterUser(userdata);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})


// call verify otp function of service

export const verifyOTPData =  createAsyncThunk("verify-otp" , async(otpData , thunkAPI)=>{
    try {
        let token = thunkAPI.getState().user.user.token
        return  await verifyOTP(otpData, token)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
        
    }
})



// 3,create your slice / golbal state

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userReset: (state)=>{
            state.userError= false;
            state.userLoader= false;
            state.userSucess = false;
            state.userMessage= "";
        }
    },

    // 6, handle the api state
    
    extraReducers: (builder)=>{
        builder.addCase(RegisterUserData.pending, (state, action)=>{
            state.userLoader = true
        }).addCase(RegisterUserData.rejected, (state, action)=>{
            state.userLoader = false
            state.userError = true
            state.userMessage = action.payload
        }).addCase(RegisterUserData.fulfilled, (state ,action)=>{
            state.userLoader = false
            state.userError = false
            state.userSucess = true
            state.userMessage = action.payload
            state.user = action.payload
        }).addCase(verifyOTPData.pending , (state, action)=>{
            state.userLoader = true
        }).addCase(verifyOTPData.rejected , (state, action)=>{
            state.userLoader= false
            state.userError = true
            state.userMessage =  action.payload
        }).addCase(verifyOTPData.fulfilled , (state, action)=>{
            state.userLoader = false
            state.userSucess = true
            state.userMessage = action.payload
            state.user = action.payload
        })
    },
})


// 4, exports for registration of reducer to make a global
export default userSlice.reducer;
export const {userReset} = userSlice.actions;