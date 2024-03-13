import { createSlice } from "@reduxjs/toolkit";

const initialState={
    OwnerId:null
}


const videoSlice=createSlice({
    name:'video',
    initialState,
    reducers:{
        videoIdForDetails:(state,action)=>{
            state.OwnerId=action.payload
        }
    }
})


export const {videoIdForDetails}=videoSlice.actions

export default videoSlice.reducer