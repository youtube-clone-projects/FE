import "./MainPage.css";
import SideBar from "../components/SideBar/SideBar";
import styled, { css } from "styled-components";

const cardLists = [
  {
    id: 1,
    img: "썸네일",
    title: "시녕꾸꾸",
    channelUrl: "정은땅1",
  },
  {
    id: 2,
    img: "썸네일",
    title: "시녕까까",
    channelUrl: "정은땅2",
  },
  {
    id: 3,
    img: "썸네일",
    title: "시녕꼬꼬",
    channelUrl: "정은땅3",
  },
];

function MainPage() {
  return (
    <StDiv All>
      <SideBar />
      <div className="contents">
        <StDiv ContentContainer>
          <StDiv ContentsBox>
            {cardLists.map((cardList) => {
              console.log(cardList);
              return (
                <StDiv ContentCard>
                  <StDiv ContentCardImg>
                    <img src={cardList.img} alt="정은썸넬" />
                  </StDiv>
                  <StDiv ContentCardChan>
                    <StDiv ChanImg>{cardList.channelUrl}</StDiv>
                    <StDiv ContentCardTxt>
                      <StSpan ContentTitle>
                        신영땅네 무작정 찾아가봄ㅋㅋ!
                      </StSpan>
                      <StDiv ContentContents>
                        <div>
                          <a href="채널 이동될 주소">정은땅의 슬기로운 생활</a>
                        </div>
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
      background-color: #000000;
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
      height: 300.487px;
      width: 1248px;
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
    props.ChanImg &&
    css`
      width: 36px;
      height: 36px;
      background-color: blue;
      border-radius: 50%;
      margin: 12px 12px 0 0;
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

export default MainPage;