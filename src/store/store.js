import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import darkSlice from "./darkSlice";


const store=configureStore(
    {
        reducer:{
           auth:authSlice,
           dark:darkSlice 
        }
    }
)

export default store