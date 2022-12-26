import React from "react";
import Header from "../components/Header/Header";
// import Layout from "../components/layout/Layout";
import DetailPage from "../components/DetailPage/DetailPage";
import Layout from "../components/Layout/Layout";
import SideBar from "../components/SideBar/SideBar";

const Detail = () => {
  return (
    <>
      <Header />
      <Layout>
        <DetailPage />
      </Layout>
    </>
  );
};

export default Detail;
