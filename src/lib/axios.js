import axios from "axios";

// 기본 URL
const instance = axios.create({
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

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

// apis
export const apis = {
  // 로그인 관련
  postLogin: (login) => instance.post("/api/user/login", login),
  postSignup: (signup) => instance.post("/api/user/signup", signup),

  // 게시글 등록
  createPost: (post) => {
    console.log("payload::", post);
    baseURL.post("/posts", post, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
