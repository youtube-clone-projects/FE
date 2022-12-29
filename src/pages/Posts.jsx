import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
// import Layout from "../components/Layout";
import Posting from "../components/Posting/Post";

const Post = () => {
  return (
    <>
      <Header />
      <Layout>
        <Posting />
      </Layout>
    </>
  );
};

export default Post;
