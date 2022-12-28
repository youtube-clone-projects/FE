import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apis } from "../../lib/axios";

const initialState = {
  postList: [],
  post: {},
  isLoading: true,
  error: null,
};

export const __getList = createAsyncThunk(
  "getList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://www.sparta-sjl.shop/api/posts`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MiIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNjcyMDA1NjU3LCJpYXQiOjE2NzE2NDU2NTd9.IQyDjcHWVCHdTnn-1_Ncr7SJn_hePBqM7Q8n8VAikbc",
          },
        }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 데이터 추가
export const __postPost = createAsyncThunk(
  "postPost",
  async (payload, thunkAPI) => {
    try {
      for (const pair of payload) {
        console.log(pair[0] + ", " + pair[1]);
      }
      console.log("payload :", payload);
      const data = await apis.createPost(payload);
      // const data = await axios.post(
      //   `https://www.sparta-sjl.shop/api/posts`,
      //   payload
      // );

      console.log("POST 추가 데이터", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__postPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state.posts);
      state.posts.push(action.payload);
      // state.posts = [...state.posts, action.payload];
    },
    [__postPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [__getPost.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getPost.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.post = action.payload;
    // },
    // [__getPost.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
