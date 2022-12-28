import SideBar from "../SideBar/SideBar";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getPost } from "../../redux/modules/postSlice";
// import { Navigate } from "react-router-dom";

// const cardLists = [ //맵돌리기전 가짜카드
//   {
//     num: 1,
//     videoFile: "썸네일",
//     imageFile: "프사",
//     title: "시녕까까",
//     username: "정은땅",

//   },
//   {
//     num: 2,
//     videoFile: "썸네일",
//     imageFile: "프사",
//     title: "시녕꼬꼬",
//     username: "정은땅",
//   },
// ];

function MainPage() {
  const dispatch = useDispatch();
  const playPosts = useSelector((state) => state.posts.posts);
  console.log("playPosts:", playPosts);

  useEffect(() => {
    dispatch(__getPost());

    // .then((res) => {

    //   setPosts(res.data.data);
    //   console.log("useEffect :", res);
    // });
  }, []);

  return (
    <StDiv All>
      <SideBar />
      {/* <SideBar /> */}
      <div className="contents">
        <StDiv ContentContainer>
          <StDiv ContentsBox>
            {playPosts.map((cardList) => {
              console.log(cardList);
              return (
                <StDiv ContentCard key={cardList.num}>
                  <StDiv ContentCardImg>
                    <StImg
                      thumnailImg
                      src={cardList.videoFile}
                      alt={cardList.videoFile}
                    />
                  </StDiv>
                  <StDiv ContentCardChan>
                    <StImg ChanImg src={cardList.imageFile} alt="프로필사진" />
                    <StDiv ContentCardTxt>
                      <StSpan ContentTitle>{cardList.title}</StSpan>
                      <StDiv ContentContents>
                        <div>
                          <a href="채널 이동될 주소">{cardList.username}</a>
                          {/* a 안먹힐 수도 있어서 링크나 네비게이트로 바꾸기 */}
                        </div>
                        <span className="viewDate">
                          {`${cardList.createdAt[0]}-${cardList.createdAt[1]}-${cardList.createdAt[2]}`}
                          {/* 문자열이랑 {자바스크립트 내용}같이 쓰려면 template literals 쓰기! */}
                        </span>
                        <br />
                        <span className="viewDate">
                          {`${cardList.createdAt[3]}:${cardList.createdAt[4]}:${cardList.createdAt[5]}`}
                        </span>
                      </StDiv>
                    </StDiv>
                  </StDiv>
                </StDiv>
              );
            })}
          </StDiv>
        </StDiv>
      </div>
    </StDiv>
  );
}

const StDiv = styled.div`
  ${(props) =>
    props.All &&
    css`
      background-color: #0f0f0f;
      color: #ffffff;
      display: flex;
    `}

  ${(props) =>
    props.ContentContainer &&
    css`
      display: flex;
      outline: rgb(255, 0, 0) dashed 1px;
    `}

  ${(props) =>
    props.ContentsBox &&
    css`
      height: 100%px;
      width: 100%;
      max-width: 1344px;
      min-width: auto;
      display: flex;
      margin: 0 16px;
    `}

  ${(props) =>
    props.ContentCard &&
    css`
      gap: auto;
      width: 312px;
      height: 300.49px;
      background-color: green;
      position: relative;
      top: 0px;
      bottom: 0px;
      right: 0px;
      left: 0px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}

  ${(props) =>
    props.ContentCardImg &&
    css`
      width: 295.99px;
      height: 166.49px;
      background-color: skyblue;
      border-radius: 15px;
    `}

  ${(props) =>
    props.ContentCardChan &&
    css`
      display: flex;
      width: 295.99px;
      height: 94px;
      background-color: pink;
    `}

  

  ${(props) =>
    props.ContentCardTxt &&
    css`
      margin-top: 10px;
      padding: 0 24px 0 0;
      background-color: yellow;
    `}

  ${(props) =>
    props.ContentContents &&
    css`
      a {
        color: orange;
      }
      font-size: 12px;
    `}
`;

const StSpan = styled.span`
  ${(props) =>
    props.ContentTitle &&
    css`
      font-size: 14px;
    `}
`;
const StImg = styled.img`
  ${(props) =>
    props.thumnailImg &&
    css`
      width: 295.99px;
      height: 166.49px;
      border-radius: 15px;
    `}

  ${(props) =>
    props.ChanImg &&
    css`
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin: 12px 12px 0 0;
    `}
`;
export default MainPage;
