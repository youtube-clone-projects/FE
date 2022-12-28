import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getList } from "../../redux/modules/postingSlice";
import { Link } from "react-router-dom";
import {
  __getPosts,
  __deletePost,
  __getComments,
  __deleteComments,
  __editComments,
  __addComments,
  __likeButton,
} from "../../redux/modules/detailSlice";
import { useParams, useNavigate } from "react-router-dom";
// import Detailcomment from "../detail/DetailComment";

function DetailPage() {
  const { isLoading, error, posts } = useSelector((state) => state.detail);
  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  // const fetchPosts = async () => {
  //   const { data } = await axios.get("https://test101.fly.dev/posts");
  //   setPosts(data);
  // };

  useEffect(() => {
    dispatch(__getList());
    dispatch(__getPosts(Number(id)));
    console.log(id);
  }, [dispatch]);

  if (isLoading) {
    return <div style={{ color: "#fff" }}>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Inner>
      <LeftContainer>
        <Video></Video>
        <VideoTitle>{posts.title}</VideoTitle>

        <SideBar>
          <LeftItem>
            <Icon></Icon>
            <Channel>
              <ChannelName href="/">{posts.username}</ChannelName>
              <ChannelCount>구독자 1.51천명</ChannelCount>
            </Channel>
            <SubBtn>
              <SubName>구독</SubName>
            </SubBtn>
          </LeftItem>
          <RightItem>
            <SubItem>
              <LikeBtn>좋아요</LikeBtn>
              <ShareBtn>공유하기</ShareBtn>
            </SubItem>
          </RightItem>
        </SideBar>
        <MainContent>
          <MainTitle>조회수: 7.8만회 2일 전</MainTitle>
          <MainContents>{posts.content}</MainContents>
        </MainContent>

        {/* <Comments isLogin={isLogin} /> */}
      </LeftContainer>
      <RightContainer>
        <SideCategory>
          <Category all>모두</Category>
          <Category>관련 콘텐츠</Category>
          <Category category>실시간</Category>
        </SideCategory>

        {posts?.map((post) => {
          return (
            <StyledLink to={`/detail/${post.num}`} key={post.num}>
              <SideItem>
                <SideImg alt="SideImage" src={post.imageUrl}></SideImg>
                <SideText>
                  <SideTitle>{post.title}</SideTitle>
                  <SideContent>
                    <Chennel>{post.content}</Chennel>
                    <Dates>조회수: 100 , 1년</Dates>
                  </SideContent>
                </SideText>
              </SideItem>
            </StyledLink>
          );
        })}
        <SideItem>
          <SideImg></SideImg>
          <SideText>
            <SideTitle>
              ☠예능매치☠ '트레블을 놓고 벌이는 챔스 결승!' 최강의 미드진이냐?
            </SideTitle>
            <SideContent>
              <Chennel>스포티비</Chennel>
              <Dates>조회수: 100 , 1년</Dates>
            </SideContent>
          </SideText>
        </SideItem>
      </RightContainer>
    </Inner>
  );
}

export default DetailPage;

const Inner = styled.div`
  max-width: 1870px;
  width: 100%;
  height: 100vh;

  display: flex;
  /* justify-content: center; */
  background-color: #0f0f0f;
`;

const LeftContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  height: auto;
  background-color: #0f0f0f;
`;

const RightContainer = styled.div`
  max-width: 360px;
  width: 100%;
  height: auto;
  background-color: #0f0f0f;
  display: flex;
  margin-left: 30px;
  flex-direction: column;
`;

const Video = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 534px;
  margin: 5spx auto 0 auto;
  background-color: #fff;
`;

const VideoTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  text-decoration: none solid rgb(241, 241, 241);
  word-spacing: 0;
  color: #fff;
  background-color: transparent;
  margin: 20px 0 0 25px;
`;

const SideBar = styled.div`
  margin: 20px 0 0 25px;
  background-color: transparent;
  display: flex;
`;

const LeftItem = styled.div`
  width: 50%;
  height: 50px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;

  background-color: purple;
`;

const Channel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  background-color: transparent;
`;

const ChannelName = styled.a`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  background-color: transparent;
`;

const ChannelCount = styled.div`
  font-size: 17px;
  color: gray;
  background-color: transparent;
`;

const SubBtn = styled.div`
  width: 70px;
  height: 50px;
  background-color: #fff;
  margin-left: 20px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubName = styled.span`
  font-size: 16px;
  color: #000;
  background-color: #fff;
`;

const MainContent = styled.div`
  max-width: 1300px;
  height: auto;
  background-color: #2e2e2e;
  padding: 5px 10px 10px 10px;
  margin: 20px 0 0 20px;
  border-radius: 10px;
`;

// const CommentBox = styled.div`
//   max-width: 1300px;
//   height: auto;
//   background-color: #2e2e2e;
//   padding: 5px 10px 10px 10px;
//   margin: 20px 0 0 20px;
//   border-radius: 10px;
// `;

// const CommentP = styled.p`
//   color: white;
//   background-color: transparent;
// `;

const MainTitle = styled.div`
  font-size: 15px;

  line-height: 28px;
  text-decoration: none solid rgb(241, 241, 241);
  word-spacing: 0;
  color: #fff;
  background-color: transparent;
  margin: 0 0 0 15px;
`;
const MainContents = styled.div`
  font-size: 15px;

  line-height: 28px;
  text-decoration: none solid rgb(241, 241, 241);
  word-spacing: 0;
  color: #fff;
  background-color: transparent;
  margin: 20px 0 0 15px;
`;
const RightItem = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: transparent;
`;

const SubItem = styled.div`
  position: absolute;
  right: -30px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const LikeBtn = styled.div`
  width: 80px;
  height: 50px;
  border-radius: 30px;
  margin-right: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShareBtn = styled.div`
  width: 80px;
  height: 50px;
  border-radius: 30px;
  margin-right: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideCategory = styled.div`
  width: 360px;
  height: 50px;
  background-color: #0f0f0f;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const Category = styled.div`
  width: 90px;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-size: 16px;
  margin-left: 10px;

  ${(props) =>
    props.all &&
    css`
      width: 60px;
    `};
  ${(props) =>
    props.category &&
    css`
      width: 70px;
    `};
`;

const SideItem = styled.div`
  width: 360px;
  height: 100px;
  background-color: #0f0f0f;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const SideImg = styled.img`
  width: 160px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
`;

const SideText = styled.div`
  width: 190px;
  height: 100px;
  background-color: #0f0f0f;
  margin: 10px;
`;

const SideTitle = styled.div`
  font-size: 15px;
  color: #fff;
  background-color: transparent;
`;
const SideContent = styled.div`
  width: 170px;
  height: 35px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  background-color: #0f0f0f;
`;

const Chennel = styled.div`
  font-size: 13px;
  color: grey;
  background-color: transparent;
`;

const Dates = styled.div`
  font-size: 13px;
  color: grey;
  background-color: transparent;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
