import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: 
            {
                user_id: 0,
                username: "Gay"
            },
        autorised: false,
        access_token: ""
        
    },
    reducers: {
        setUser: (state, action)=>{
            state.user.user_id = action.payload.id
            state.user.username = action.payload.username
            state.autorised = true
        },
        setAutorised:(state, action)=>{
            state.autorised = action.payload
        }
        
    },
});

export const {setUser, setAutorised} = userSlice.actions;

export default userSlice.reducer;