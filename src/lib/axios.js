import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.sparta-sjl.shop/api",
  header: {
    //    "content-type": "application/json;charset=UTF-8",
    // accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: "https://www.sparta-sjl.shop/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("num");
  config.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2Rhc2QzIiwiYXV0aCI6IiIsImV4cCI6MTY3MjIzOTgzNSwiaWF0IjoxNjcyMjM2MjM1fQ.T1CMoUY2AqrUhtKxQKhr0QCijcO79Gk5Np_QeoPb4-M";
  //  `${token}`;
  return config;
});

export const apis = {
  //관리하기 편하려고 만듬
  //똑같은 api인데 다르게 동작할 수 있기도 하고
  //(객체형식->)언제든 편하게 갖다쓰려고 나눠서 씀

  //로그인 관련 apis
  postLogin: (login) => instance.post("/login", login),
  postSignup: (signup) => instance.post("/signup", signup),

  //게시글 관련 apis //instance
  createPost: (post) => {
    console.log("payload::", post);
    baseURL.post("/posts", post, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  //추가
  getPost: () => baseURL.get("/posts"), //조회,
  deletePost: (num) => baseURL.delete(`/posts/${num}`), //삭제
  editPost: (num, post) => baseURL.put(`/posts/${num}`, post),
  // getPostId: (num) => baseURL.get(`/post/${num}`), //조회
  // getMyPage: () => baseURL.get("/mypage/myposts"), //조회
  // getMyPageComments: () => baseURL.get("/mypage/mypost/comments"), //조회

  // 내가 사용할 변수이름 : (넘겨줄 값 ex.payload) => baseUrl.api메소드("api명세서 url", 넘겨줄 값ex.payload)
  // 넘겨줄값이 없을경우 비워둔다.

  //댓글 관련 apis

  //좋아요 관련 apis
  clickLike: (num) => baseURL.post(`likes/${num}`),
};
