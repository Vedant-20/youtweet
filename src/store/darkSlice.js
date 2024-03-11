import { createSlice } from "@reduxjs/toolkit";

const initialState={
    themeMode:'dark'
}

const darkSlice=createSlice({
    name:'dark',
    initialState,
    reducers:{
        
        setMode:(state,action)=>{
            state.themeMode=action.payload
        }
    }
})

export const {setMode} =darkSlice.actions;

export default darkSlice.reducer