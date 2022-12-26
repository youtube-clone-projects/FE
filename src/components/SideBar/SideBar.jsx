import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { FaYoutubeSquare } from "react-icons/fa";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";
import styled, { css } from "styled-components";
import "./SideBar.css";

const SideBar = () => {
  const hje = "https://github.com/wjddms0501";
  const minjae = "https://github.com/MJ-Dev92";
  const sangjung = "https://github.com/WooLeeHappy";
  const sunghyun = "https://github.com/kwon-sunghyun";
  const deockbin = "https://github.com/dorothyah";
  const suyeah = "https://github.com/addydfdf";

  return (
    <div>
      <StDiv GuideContentDiv>
        <div>
          <StDiv CategoryLine>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">home</span>
              <span>홈</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span class="material-symbols-outlined">play_circle</span>
              <span>Shorts</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">subscriptions</span>
              <span>구독</span>
            </StDiv>
          </StDiv>
          <StDiv CategoryLine>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">video_library</span>
              <span>보관함</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">history</span>
              <span>시청기록</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">smart_display</span>
              <span>내 동영상</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">schedule</span>
              <span>나중에 볼 동영상</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">thumb_up</span>
              <span>좋아요 표시한 동영상</span>
            </StDiv>
          </StDiv>
          <StDiv CategoryLine>
            <StDiv CategoryGuide>
              <p>탐색</p>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">
                local_fire_department
              </span>
              <span>인기 급상승</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">music_note</span>
              <span>음악</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">movie</span>
              <span>영화</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">
                settings_input_antenna
              </span>
              <span>실시간</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">
                stadia_controller
              </span>
              <span>게임</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">military_tech</span>
              <span>스포츠</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">emoji_objects</span>
              <span>학습</span>
            </StDiv>
          </StDiv>
          <StDiv CategoryLine>
            <StDiv ategoryGuide>
              <p>YouTube 더보기</p>
            </StDiv>
            <StDiv CategoryGuide>
              <BsYoutube style={{ color: "red", marginRight: "24px" }} />
              <span>YouTube Premium</span>
            </StDiv>
            <StDiv CategoryGuide>
              <TfiYoutube style={{ color: "red", marginRight: "24px" }} />
              <span>크리에이터 스튜디오</span>
            </StDiv>
            <StDiv CategoryGuide>
              <SiYoutubemusic style={{ color: "red", marginRight: "24px" }} />
              <span>YouTube Music</span>
            </StDiv>
            <StDiv CategoryGuide>
              <SiYoutubegaming style={{ color: "red", marginRight: "24px" }} />
              <span>YouTube Kids</span>
            </StDiv>
            <StDiv CategoryGuide>
              <FaYoutubeSquare style={{ color: "red", marginRight: "24px" }} />
              <span>YouTube TV</span>
            </StDiv>
          </StDiv>
          <StDiv CategoryLine>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">settings</span>
              <span>설정</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">flag</span>
              <span>신고 기록</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">help</span>
              <span>고객센터</span>
            </StDiv>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">sms_failed</span>
              <span>의견 보내기</span>
            </StDiv>
          </StDiv>
          <StDiv categoryLine>
            <StDiv CategoryGuide>
              <span className="material-symbols-outlined">diversity_3</span>
              <span>C반 5조</span>
            </StDiv>
            <StDiv
              CategoryGuide
              onClick={() => {
                window.open(minjae);
              }}
            >
              <span className="material-symbols-outlined">emoji_people</span>
              <span>
                전민재
                <VscGithub size="17" style={{ marginLeft: "7px" }} />
              </span>
            </StDiv>
            <StDiv
              CategoryGuide
              onClick={() => {
                window.open(hje);
              }}
            >
              <span className="material-symbols-outlined">sledding</span>
              <span>
                허정은
                <VscGithub size="17" style={{ marginLeft: "7px" }} />
              </span>
            </StDiv>
            <StDiv
              CategoryGuide
              onClick={() => {
                window.open(sunghyun);
              }}
            >
              <span className="material-symbols-outlined">directions_run</span>
              <span>
                권성현
                <VscGithubInverted size="17" style={{ marginLeft: "7px" }} />
              </span>
            </StDiv>
            <StDiv
              CategoryGuide
              onClick={() => {
                window.open(deockbin);
              }}
            >
              <span className="material-symbols-outlined">
                accessibility_new
              </span>
              <span>
                홍덕빈
                <VscGithubInverted size="17" style={{ marginLeft: "7px" }} />
              </span>
            </StDiv>
            <StDiv
              CategoryGuide
              onClick={() => {
                window.open(suyeah);
              }}
            >
              <span className="material-symbols-outlined">sports_handball</span>
              <span>
                김수예
                <VscGithubInverted size="17" style={{ marginLeft: "7px" }} />
              </span>
            </StDiv>
            <StDiv
              CategoryGuide
              onClick={() => {
                window.open(sangjung);
              }}
            >
              <span className="material-symbols-outlined">
                sports_martial_arts
              </span>
              <span>
                이상정
                <VscGithubInverted size="17" style={{ marginLeft: "7px" }} />
              </span>
            </StDiv>
          </StDiv>
        </div>
      </StDiv>
    </div>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.GuideContentDiv &&
    css`
      &::-webkit-scrollbar {
        width: 8px; /* 스크롤바의 너비 */
      }
      &::-webkit-scrollbar-thumb {
        height: 15%; /* 스크롤바의 길이 */
        background: gray; /* 스크롤바의 색상 */
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
        background: transparent; /*스크롤바 뒷 배경 색상*/
      }
      background-position: 0% 0%;
      height: 657.6px;
      width: 224px;
      padding: 12px;
      min-width: auto;
      min-height: auto;
      display: block;
      overflow: hidden auto;
      outline: rgb(255, 0, 0) dashed 1px;
    `}

  ${(props) =>
    props.CategoryLine &&
    css`
      border-bottom: 1px solid #303030;
      padding-bottom: 10px;
      margin-bottom: 10px;
    `}

    ${(props) =>
    props.CategoryGuide &&
    css`
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 12px;

      color: #fff
      cursor: pointer;
      &:hover {
        background-color: #2e2e2e;
        border-radius: 10px;
      }
    `}
    ${(props) =>
    props.CategoryGuide &&
    css`
      > span:last-child {
        font-size: 14px;
        background-color: transparent;
      }
    `}
`;

export default SideBar;
