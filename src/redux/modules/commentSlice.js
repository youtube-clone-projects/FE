import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../lib/axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/posts/${payload.num}`);
      console.log(data.data.commentList);
      return thunkAPI.fulfillWithValue(data.data.commentList);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      const [addComment, id] = payload;
      // payload에 전달되는 addComment와 id를 가져올 수 있다.
      const data = await instance.post(
        `/api/posts/${payload.postId}/comments`,
        addComment
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.delete(
        `/api/posts/${payload.postId}/comments/${payload.commentId}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editComment = createAsyncThunk(
  "editComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.put(
        `/api/posts/${payload.postId}/comments/${payload.commentId}`,
        payload.editComment
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteComment.pending]: (state) => {
      state.isLoadig = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoadig = false;
      state.comments = state.comments.filter(
        (comment) => comment.commentId !== action.payload.commentId
      );
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action.payload.response.data.errorMessage);
      alert(action.payload.response.data.errorMessage);
    },

    [__editComment.pending]: (state, action) => {
      // state.isLoading = true;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.comments.findIndex(
        (comment) => comment.commentId === action.payload.commentId
      );
      state.comments.splice(index, 1, action.payload);
    },

    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.response.data.errorMessage);
    },

    [__getComment.pending]: (state) => {
      state.isLoadig = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoadig = false;
      state.comments = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoadig = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
