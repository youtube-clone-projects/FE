import styled, { css } from "styled-components";

function My() {
  return (
    <div>
      <StDiv MyAll>
        <StDiv ChanHead>
          <StDiv ChanHeadMe>
            <StDiv ProfileImg>Img</StDiv>
            <StDiv ProfileName>정은</StDiv>
          </StDiv>
        </StDiv>
        <StDiv ChanHeadCategory>
          <StDiv ChanHeadTap>업로드 목록</StDiv>
        </StDiv>
        <StDiv ChanBody>내가 업로드한 영상</StDiv>
      </StDiv>
    </div>
  );
}

const StDiv = styled.div`
  ${(props) =>
    props.MyAll &&
    css`
      width: 1279.2px;
      height: 759.6px;
      background-color: red;
      display: flex;
      flex-direction: column;
    `}

  ${(props) =>
    props.ChanHead &&
    css`
      width: 1279.4px;
      height: 102.4px;
      background-color: orange;
      display: flex;
      align-items: center; ;
    `}

  ${(props) =>
    props.ChanHeadMe &&
    css`
      max-width: 1284px;
      height: 82.4px;
      background-color: yellow;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    `}

  ${(props) =>
    props.ProfileImg &&
    css`
      width: 80px;
      height: 80px;
      margin-right: 24px;
      background-color: green;
      border-radius: 50%;
      cursor: pointer;
    `}

  ${(props) =>
    props.ProfileName &&
    css`
      width: 718.53px;
      height: 70px;
      background-color: green;
    `}

  ${(props) =>
    props.ChanHeadCategory &&
    css`
      width: 1279.4px;
      height: 48px;
      background-color: blue;
      display: flex;
      align-items: center;
      border-bottom: 3px solid #f1f1f1;
    `}

  ${(props) =>
    props.ChanHeadTap &&
    css`
      width: 122px;
      height: 48px;
      background-color: purple;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 3px solid #f1f1f1;
      cursor: pointer;
    `}

  ${(props) =>
    props.ChanBody &&
    css`
      width: 1070px;
      height: 536px;
      background-color: skyblue;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    `}
`;

export default My;
