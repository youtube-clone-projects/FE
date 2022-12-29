// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import EditPost from "../../components/post/EditPost";

const initialState = {
  post: [],
  commentList: [],
  isLoading: true,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "getPosts", // 키 오류
  async (payload, thunkAPI) => {
    try {
      // const [id, indexList] = payload;

      const { data } = await axios.get(
        `https://www.sparta-sjl.shop/api/posts/${payload}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2Rhc2QxMiIsImF1dGgiOiIiLCJleHAiOjE2NzI2NDYwODgsImlhdCI6MTY3MjI4NjA4OH0.5wg19q9WOQxKNaq_LQR9jXUNcWDR6j8IoPouzdaywIE",
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

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      // const postId = payload;
      const data = await axios.get(
        `https://www.sparta-sjl.shop/api/posts/${payload}/comments`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2Rhc2QxMiIsImF1dGgiOiIiLCJleHAiOjE2NzI2NDYwODgsImlhdCI6MTY3MjI4NjA4OH0.5wg19q9WOQxKNaq_LQR9jXUNcWDR6j8IoPouzdaywIE",
          },
        }
      );

      return thunkAPI.fulfillWithValue(
        data.data.commentList.filter((comment) => comment.id === payload)
      );
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  "deleteComments",
  async (payload, thunkAPI) => {
    try {
      const [commentId, postId] = payload;
      console.log(payload);
      const data = await axios.delete(
        `https://www.sparta-sjl.shop/api/posts/${postId}/comments/${commentId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2Rhc2QxMiIsImF1dGgiOiIiLCJleHAiOjE2NzI2NDYwODgsImlhdCI6MTY3MjI4NjA4OH0.5wg19q9WOQxKNaq_LQR9jXUNcWDR6j8IoPouzdaywIE",
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editComments = createAsyncThunk(
  "editComments",
  async (payload, thunkAPI) => {
    try {
      const [commentId, editComment, postId] = payload;
      console.log(editComment);
      const data = await axios.put(
        `https://www.sparta-sjl.shop/api/posts/${postId}/comments/${commentId}`,
        { comment: editComment },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2Rhc2QxMiIsImF1dGgiOiIiLCJleHAiOjE2NzI2NDYwODgsImlhdCI6MTY3MjI4NjA4OH0.5wg19q9WOQxKNaq_LQR9jXUNcWDR6j8IoPouzdaywIE",
          },
        }
      );
      console.log("data : ", data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComments = createAsyncThunk(
  "addComments",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const [addComment, postId] = payload;
      // const dateId = new Date().toISOString();
      const newComment = { ...addComment, postId: postId };
      console.log(newComment);

      await axios.post(
        `https://www.sparta-sjl.shop/api/posts/${postId}/comments/`,
        newComment,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2Rhc2QxMiIsImF1dGgiOiIiLCJleHAiOjE2NzI2NDYwODgsImlhdCI6MTY3MjI4NjA4OH0.5wg19q9WOQxKNaq_LQR9jXUNcWDR6j8IoPouzdaywIE",
          },
        }
      );
      thunkAPI.dispatch(__getPosts());
      thunkAPI.dispatch(__getComments());
      return thunkAPI.fulfillWithValue(newComment);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __likeButton = createAsyncThunk(
//   "likeButton",
//   async (payload, thunkAPI) => {
//     try {
//       console.log(payload);
//       await axios.post(`http://54.180.105.27:8080/api/like/post/${payload}`, {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MiIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNjcyMDA1NjU3LCJpYXQiOjE2NzE2NDU2NTd9.IQyDjcHWVCHdTnn-1_Ncr7SJn_hePBqM7Q8n8VAikbc",
//         },
//       });
//       return thunkAPI.fulfillWithValue("");
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    ////////////////////// GETPOST /////////////////////////
    [__getPosts.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // state.commentList = action.payload.commentList;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// DELETEPOST /////////////////////////
    // [__deletePost.pending]: (state) => {
    //   state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    // [__deletePost.fulfilled]: (state, action) => {
    //   state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.post = state.post.filter((post) => post.id !== action.payload);
    //   state.commentList = state.commentList.filter(
    //     (comment) => comment.postId !== action.payload
    //   );
    // },
    // [__deletePost.rejected]: (state, action) => {
    //   state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    // },

    ////////////////////// GETCOMMENTS /////////////////////////
    [__getComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.commentList = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// DELETECOMMENTS /////////////////////////
    [__deleteComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteComments.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.commentList = state.commentList.filter(
        (comment) => comment.id !== action.payload
      ); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log(
      //   state.comments.filter((comment) => comment.id !== action.payload)
      // );
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// EDITCOMMENTS /////////////////////////
    [__editComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__editComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      // console.log(action.payload);
      // console.log(
      //   state.comments.findIndex((comment) => comment.id === action.payload[0])
      // );
      console.log(action.payload[1]);
      const index = state.commentList.findIndex(
        (comment) => comment.id === action.payload[0]
      );
      // console.log(state.commentList);
      // return {
      //   ...state,
      //   commentList: state.commentList.map((com) =>
      //     com.id === action.payload[0]
      //       ? { ...com, comment: action.payload[1].comment }
      //       : com
      //   ),
      // };
      console.log(action.payload[1]);
      state.commentList = state.commentList.map((com) =>
        com.id === action.payload[0]
          ? { ...com, comment: action.payload[1] }
          : com
      );
      // state.commentList.splice(index, 1, action.payload[1]);
    },
    [__editComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// ADDCOMMENTS /////////////////////////
    [__addComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments.push(action.payload);
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    ////////////////////// Like /////////////////////////
    //   [__likeButton.pending]: (state) => {
    //     state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    //   },
    //   [__likeButton.fulfilled]: (state, action) => {
    //     state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    //     state.posts.push(action.payload);
    //   },
    //   [__likeButton.rejected]: (state, action) => {
    //     state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //     state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    //   },
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
