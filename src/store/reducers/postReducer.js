import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [{
            id: 0,
            username: "ff",
            title: "qq",
            text: "ww",
            book_name: "ee",
            book_author: "rr"
        }],
        autorised: true,
    },
    reducers: {
        setPosts: (state, action)=>{
            state.posts = action.payload.reverse()
        },
        
    },
});

export const {setPosts} = postsSlice.actions;

export default postsSlice.reducer;