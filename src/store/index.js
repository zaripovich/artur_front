

import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/userSlice"
import postReducer from './reducers/postReducer'


export const store = configureStore({
    reducer:{
        user: userReducer,
        posts: postReducer,
    },
})