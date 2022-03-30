import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from './post';
import { createGroupPost, createPost, getAllGroupPosts, getAllPosts, getFollowingPosts, getPersonalPosts} from "./post.api";
import { store } from "../../app/store";

export type PostState = Post[];

const initialState: PostState = [];

export const postPostAsync = createAsyncThunk<Post, Post>(
    'post/post/async',
    async (neoPost: Post, thunkAPI) => {
        try {
            return await createPost(neoPost);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const postGroupPostAsync = createAsyncThunk<Post, Post>(
    'post/post/async',
    async (neoPost: Post, thunkAPI) => {
        try {
            return await createGroupPost(neoPost);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        update: (state, action) => {
          state.length = 0;
          
          action.payload.forEach((index: Post) => {
            state.push(index);
          });
        },
        clear: (state) => {
            state.length = 0;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(postPostAsync.pending, (state) => {
            // do nothing
        })
        .addCase(postPostAsync.fulfilled, (state, action) => {
            // state.push(action.payload);
        })
        .addCase(postPostAsync.rejected, (state, action) => {
            // console.log(action.error);
        })
    }
});

type Rootstate = ReturnType<typeof store.getState>;
export const selectPosts = (state: Rootstate) => {
    return state.posts
}

export const { update, clear } = postSlice.actions;

export default postSlice.reducer;