import SideBar from "../SideBar/SideBar";
import styled, { css } from "styled-components";

function MainPage() {
  return (
    <StDiv All>
      <SideBar />
      {/* <SideBar /> */}
      <div className="contents">
        <StDiv ContentContainer>
          <StDiv ContentsBox>
            <StDiv ContentCard>
              <StDiv ContentCardImg>정은브이로그</StDiv>
              <StDiv ContentCardChan>
                <StDiv ChanImg>졍</StDiv>
                <StDiv ContentCardTxt>
                  <StSpan ContentTitle>신영땅네 무작정 찾아가봄ㅋㅋ!</StSpan>
                  <StDiv ContentContents>
                    <div>
                      <a href="채널 이동될 주소">정은땅의 슬기로운 생활</a>
                    </div>
                    <span ClassName="viewDate">조회수랑 날짜</span>
                  </StDiv>
                </StDiv>
              </StDiv>
            </StDiv>
            <StDiv ContentCard>
              <StDiv ContentCardImg>정은브이로그</StDiv>
              <StDiv ContentCardChan>
                <StDiv ChanImg>졍</StDiv>
                <StDiv ContentCardTxt>
                  <StSpan ContentTitle>신영땅네 무작정 찾아가봄ㅋㅋ!</StSpan>
                  <StDiv ContentContents>
                    <div>
                      <a href="채널 이동될 주소">정은땅의 슬기로운 생활</a>
                    </div>
                    <span ClassName="viewDate">조회수랑 날짜</span>
                  </StDiv>
                </StDiv>
              </StDiv>
            </StDiv>
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
