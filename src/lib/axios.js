import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.sparta-sjl.shop/api",
  header: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseURL = axios.create({
  baseURL: "https://www.sparta-sjl.shop/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("num");
  config.headers["Authorization"] = `${token}`;
  return config;
});

export const apis = {
  //관리하기 편하려고 만듬
  //똑같은 api인데 다르게 동작할 수 있기도 하고
  //(객체형식->)언제든 편하게 갖다쓰려고 나눠서 씀

  //로그인 관련 apis
  postLogin: (post) => instance.post("/user/login", post), //post가 앞 괄호에 들어가면 뒷괄호에도 들어감(넘겨주는 값에 그대로 들어감)
  // postLogout: () => instance.get("/user/logout"),
  postSignup: (post) => instance.post("/user/signup", post),

  //게시글 관련 apis //instance
  createPost: (post) =>
    baseURL.post("/post", post, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  //추가
  getPost: () => baseURL.get("/posts"), //조회,
  editPosting: (num, post) => baseURL.put(`/post/${num}`, post),
  getPostId: (num) => baseURL.get(`/post/${num}`), //조회
  getMyPage: () => baseURL.get("/mypage/myposts"), //조회
  getMyPageComments: () => baseURL.get("/mypage/mypost/comments"), //조회
  deletePost: (num) => baseURL.delete(`/post/${num}`), //삭제

  // 내가 사용할 변수이름 : (넘겨줄 값 ex.payload) => baseUrl.api메소드("api명세서 url", 넘겨줄 값ex.payload)
  // 넘겨줄값이 없을경우 비워둔다.

  //댓글 관련 apis

  //좋아요 관련 apis
  clickLike: (num) => baseURL.post(`likes/${num}`),
};
