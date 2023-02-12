import axios from "axios";

//기본 URL
export const instance = axios.create({
  baseURL: "https://www.sparta-sjl.shop/api",
  // baseURL: "https://www.sparta-sjl.shop/api",
  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
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
  const token = localStorage.getItem("id");
  console.log(token);
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export const apis = {
  // 로그인 관련
  postLogin: (login) => instance.post("/login", login),
  postSignup: (signup) => instance.post("/signup", signup),

  //게시글 관련 apis //instance
  createPost: (post) => {
    console.log("payload::", post);
    baseURL.post("/posts", post);
  },
  getPost: () => baseURL.get("/posts"),
  getIdPost: (num) => {
    return baseURL.get(`/posts/${num}`);
  },
  deletePost: (num) => baseURL.delete(`/posts/${num}`), //삭제
  editPost: (num, post) => baseURL.put(`/posts/${num}`, post),
  // getPostId: (num) => baseURL.get(`/post/${num}`), //조회
  // getMyPage: () => baseURL.get("/mypage/myposts"), //조회
  // getMyPageComments: () => baseURL.get("/mypage/mypost/comments"), //조회

  // 내가 사용할 변수이름 : (넘겨줄 값 ex.payload) => baseUrl.api메소드("api명세서 url", 넘겨줄 값ex.payload)
  // 넘겨줄값이 없을경우 비워둔다.

  //댓글 관련 apis

  //좋아요 관련 apis
  clickLike: (id) => baseURL.post(`likes/${id}`),
};
