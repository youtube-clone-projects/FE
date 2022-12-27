import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      const { data } = await axios.get(`http://54.180.105.27:8080/api/posts`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.postList);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPost = createAsyncThunk(
  "postPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.apis.postPost(payload);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

// export const __patchPost = createAsyncThunk("patchPost", async (payload) => {
//   try {
//     console.log(payload);
//     await axios.put(
//       `http://54.180.105.27:8080/api/post/${payload[0]}`,
//       payload[1],
//       {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MiIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNjcyMDA1NjU3LCJpYXQiOjE2NzE2NDU2NTd9.IQyDjcHWVCHdTnn-1_Ncr7SJn_hePBqM7Q8n8VAikbc",
//         },
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const __getPost = createAsyncThunk(
//   "getPost",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await axios.get(
//         `http://54.180.105.27:8080/api/post/${payload}`
//       );
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

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
      state.posts = action.payload;
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
      state.posts.push(action.payload);
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
