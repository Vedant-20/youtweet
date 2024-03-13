import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import darkSlice from "./darkSlice";
import videoSlice from "./videoSlice";


const store=configureStore(
    {
        reducer:{
           auth:authSlice,
           dark:darkSlice,
           video:videoSlice 
        }
    }
)

export default store