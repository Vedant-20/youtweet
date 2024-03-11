import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginStatus:true
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.loginStatus=true;
            
        },
        logout:(state)=>{
            state.loginStatus=false;
            
        }
    }
})

export const {login,logout} =authSlice.actions;

export default authSlice.reducer;