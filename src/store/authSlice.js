import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginStatus:true,
    userId:null
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
            
        },
        IdKeeper:(state,action)=>{
            state.userId=action.payload
        }
    }
})

export const {login,logout,IdKeeper} =authSlice.actions;

export default authSlice.reducer;