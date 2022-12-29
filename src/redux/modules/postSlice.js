import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apis, baseURL } from "../../lib/axios";

const initialState = {
  posts: [],
  postList: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __getList = createAsyncThunk(
  "getList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.get("/posts");
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//   ------mypage-------

//내가 작성한 게시글 조회
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.get("/posts");
      // console.log(data);
      //   return thunkAPI.fulfillWithValue(data);
      // } catch (error) {
      //   console.log(error);
      //   return thunkAPI.rejectWithValue(error);

      // const data = await apis.getPost();
      console.log("로딩데이터: ", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
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
      // const data = await apis.createPost(payload);
      const data = await baseURL.post("/posts", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("POST 추가 데이터", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __getMyPage = createAsyncThunk(
//   "getMyPage",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await apis.getMyPage();
//       console.log("로딩데이터: ", data.data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

//게시글 삭제
export const __deletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const deletedata = await baseURL.delete(
        `https://www.sparta-sjl.shop/api/posts/${payload}`,
        // payload,

        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: localStorage.getItem("id"),
          },
        }
      );

      // await axios.delete(`http://localhost:3000/post/${payload}`, payload);

      // console.log("데이터삭제, 리듀서는 id값 주기: ", payload);
      console.log("POST 삭제 데이터", deletedata);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//게시글 수정
export const __editPost = createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    console.log("payload :", payload);
    const form = new FormData();

    console.log(form);
    console.log("thunk");

    try {
      const data = await apis.editPost(payload.id, {
        title: payload.title,
        content: payload.content,
        category: payload.category,
      });

      console.log("POST 추가 데이터", data);
      //   return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);

      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // addPosting: (state, action) => {
    //   state.post = [...state.post, action.payload];
  },
  //   },
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
    // export const { addPosting } = postSlice.actions;
    // --------------------------
    // 리스트 불러오기 ---------------
    [__getPost.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청 시작-> 로딩 true 변경합니다.
    },
    [__getPost.fulfilled]: (state, action) => {
      // action으로 받아온 객체를 store에 있는 값에 넣어준다
      state.isLoading = false;
      //코드에 오류가 나지 않았을때 fullfilled인데 isLoading값을 false로 지정해주지않ㄷ으면
      //로딩중화면이 계속뜨게됨
      state.isSuccess = true;
      console.log(action.payload);
      state.posts = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false; //코드에 오류가 났을때 reject
      state.error = action.payload;
      // 에러 발생-> 네트워크 요청은 끝,false
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // //---마이페이지 조회
    // [__getMyPage.pending]: (state) => {
    //   state.isLoading = true;
    //   // 네트워크 요청 시작-> 로딩 true 변경합니다.
    // },
    // [__getMyPage.fulfilled]: (state, action) => {
    //   // action으로 받아온 객체를 store에 있는 값에 넣어준다
    //   state.isLoading = false;
    //   //코드에 오류가 나지 않았을때 fullfilled인데 isLoading값을 false로 지정해주지않ㄷ으면
    //   //로딩중화면이 계속뜨게됨
    //   state.isSuccess = true;
    //   console.log("getMyPage의 Payload:", action.payload);
    //   state.post = action.payload.postList;
    // },
    // [__getMyPage.rejected]: (state, action) => {
    //   state.isLoading = false; //코드에 오류가 났을때 reject
    //   state.error = action.payload;
    //   // 에러 발생-> 네트워크 요청은 끝,false
    //   // catch 된 error 객체를 state.error에 넣습니다.
    // },
    // 리스트 추가 ------------------
    //   [__addPosting.pending]: (state) => {
    //     state.isLoading = true;
    //   },
    //   [__addPosting.fulfilled]: (state, action) => {
    // 액션으로 받은 값 = payload 추가해준다.

    //     console.log("action-서버값", action.payload);
    //     console.log("state값", state);
    //     state.isLoading = false;
    //     state.post.data.postList = [...state.post.data.postList, action.payload];
    //   },
    //   [__addPosting.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
    // 리스트 삭제 ------------------
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      // 미들웨어를 통해 받은 action값이 무엇인지 항상 확인한다
      console.log("action-서버값", typeof action.payload);
      state.isLoading = false;
      state.posts = state.posts.filter((post) => post.num !== action.payload);
      // console.log(state.posts);
      // state.posts.push(action.payload);
      // state.posts = [...state.posts, action.payload];

      // const newPost = state.posts.filter((t) => t.num !== action.payload);
      // state.posts = [...newPost];
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // [__getPost.pending]: (state) => {

    // 수정 버튼 클릭 -----------------
    // [__editStartPosting.pending]: (state) => {

    //   state.isLoading = true;
    // },
    // [__editStartPosting.fulfilled]: (state, action) => {
    //   // console.log('state-store값',state.diary)
    //   console.log("action-서버값", action);
    //   state.isLoading = false;
    //   const copy = [...state.post];
    //   const index = state.post.findIndex((c) => +c.id === +action.payload.id);
    //   state.post[index] = action.payload;
    //   state.post = [...state.post];
    // },
    // [__editStartPosting.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // // 수정 완료 버튼 클릭 -----------------
    [__editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__editPost.fulfilled]: (state, action) => {
      // console.log('state-store값',state.diary)
      console.log("action-서버값", action);
      state.isLoading = false;
      const index = state.diary.findIndex((c) => +c.id === +action.payload.id);
      state.post[index] = action.payload;
      state.post = [...state.post];
    },
    [__editPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ----------------------------------
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

    //좋아요
    //   [__likeToggle.pending]: (state) => {
    //     state.isLoading = true;
    //   },
    //   [__likeToggle.fulfilled]: (state, action) => {
    //     // 액션으로 받은 값 = payload 추가해준다.
    //     console.log("action: ", action.payload);
    //     state.isLoading = false;
    //     state.posts = action.payload;
    //   },
    //   [__likeToggle.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
