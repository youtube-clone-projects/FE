import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage";
// import PostingPage from "../pages/PostingPage";
// import DetailPage from "../pages/DetailPage";
// import DetailEditPage from "../pages/DetailEditPage";
// import EditPost from "../components/Post/EditPost";
// import SignIn from "../pages/SingIn";
// import SignUp from "../pages/SignUp";
// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="detail/:id" element={<DetailPage />} /> */}
          {/* <Route path="detailedit/:id" element={<EditPost />} /> */}
          {/* <Route path="detailedit/:id" element={<DetailEditPage />} /> */}
          {/* <Route path="posting" element={<PostingPage />} /> */}
          {/* <Route path="signin" element={<SignIn />} /> */}
          {/* <Route path="signup" element={<SignUp />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
