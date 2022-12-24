import "./MainPage.css";
import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { FaYoutubeSquare } from "react-icons/fa";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";

function MainPage() {
  const hje = "https://github.com/wjddms0501";
  const minjae = "https://github.com/MJ-Dev92";
  const sangjung = "https://github.com/WooLeeHappy";
  const sunghyun = "https://github.com/kwon-sunghyun";
  const deockbin = "https://github.com/dorothyah";
  const suyeah = "https://github.com/addydfdf";

  return (
    <div className="All">
      <div className="guideContent">
        <div>
          <div className="categoryLine">
            <div className="categoryGuide">
              <span className="material-symbols-outlined">home</span>
              <span>홈</span>
            </div>
            <div className="categoryGuide">
              <span class="material-symbols-outlined">play_circle</span>
              <span>Shorts</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">subscriptions</span>
              <span>구독</span>
            </div>
          </div>
          <div className="categoryLine">
            <div className="categoryGuide">
              <span className="material-symbols-outlined">video_library</span>
              <span>보관함</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">history</span>
              <span>시청기록</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">smart_display</span>
              <span>내 동영상</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">schedule</span>
              <span>나중에 볼 동영상</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">thumb_up</span>
              <span>좋아요 표시한 동영상</span>
            </div>
          </div>
          <div className="categoryLine">
            <div className="categoryGuide">
              <p>탐색</p>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">
                local_fire_department
              </span>
              <span>인기 급상승</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">music_note</span>
              <span>음악</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">movie</span>
              <span>영화</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">
                settings_input_antenna
              </span>
              <span>실시간</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">
                stadia_controller
              </span>
              <span>게임</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">military_tech</span>
              <span>스포츠</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">emoji_objects</span>
              <span>학습</span>
            </div>
          </div>
          <div className="categoryLine">
            <div className="categoryGuide">
              <p>YouTube 더보기</p>
            </div>
            <div className="categoryGuide">
              <BsYoutube style={{ color: "red", marginRight: "24px" }} />
              <span>YouTube Premium</span>
            </div>
            <div className="categoryGuide">
              <TfiYoutube style={{ color: "red", marginRight: "24px" }} />
              <span>크리에이터 스튜디오</span>
            </div>
            <div className="categoryGuide">
              <SiYoutubemusic style={{ color: "red", marginRight: "24px" }} />
              <span>YouTube Music</span>
            </div>
            <div className="categoryGuide">
              <SiYoutubegaming style={{ color: "red", marginRight: "24px" }} />
              <span>YouTube Kids</span>
            </div>
            <div className="categoryGuide">
              <FaYoutubeSquare style={{ color: "red", marginRight: "24px" }} />
              <span>YouTube TV</span>
            </div>
          </div>
          <div className="categoryLine">
            <div className="categoryGuide">
              <span className="material-symbols-outlined">settings</span>
              <span>설정</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">flag</span>
              <span>신고 기록</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">help</span>
              <span>고객센터</span>
            </div>
            <div className="categoryGuide">
              <span className="material-symbols-outlined">sms_failed</span>
              <span>의견 보내기</span>
            </div>
          </div>
          <div className="categoryGuide">
            <span className="material-symbols-outlined">diversity_3</span>
            <span>C반 5조</span>
          </div>
          <div
            className="categoryGuide"
            onClick={() => {
              window.open(minjae);
            }}
          >
            <span className="material-symbols-outlined">emoji_people</span>
            <span>
              전민재
              <VscGithub size="17" style={{ marginLeft: "7px" }} />
            </span>
          </div>
          <div
            className="categoryGuide"
            onClick={() => {
              window.open(hje);
            }}
          >
            <span className="material-symbols-outlined">sledding</span>
            <span>
              허정은
              <VscGithub size="17" style={{ marginLeft: "7px" }} />
            </span>
          </div>
          <div
            className="categoryGuide"
            onClick={() => {
              window.open(sunghyun);
            }}
          >
            <span className="material-symbols-outlined">directions_run</span>
            <span>
              권성현
              <VscGithubInverted size="17" style={{ marginLeft: "7px" }} />
            </span>
          </div>
          <div
            className="categoryGuide"
            onClick={() => {
              window.open(deockbin);
            }}
          >
            <span className="material-symbols-outlined">accessibility_new</span>
            <span>
              홍덕빈
              <VscGithubInverted size="17" style={{ marginLeft: "7px" }} />
            </span>
          </div>
          <div
            className="categoryGuide"
            onClick={() => {
              window.open(suyeah);
            }}
          >
            <span className="material-symbols-outlined">sports_handball</span>
            <span>
              김수예
              <VscGithubInverted size="17" style={{ marginLeft: "7px" }} />
            </span>
          </div>
          <div
            className="categoryGuide"
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
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="contentContainer">
          <div className="contentsBox">
            <div className="contentCard">
              <div className="contentCardImg">정은브이로그</div>
              <div className="contentCardChan">
                <div className="chanImg">졍</div>
                <div className="contentCardTxt">
                  <span className="contentTitle">
                    신영땅네 무작정 찾아가봄ㅋㅋ!
                  </span>
                  <div className="contentContents">
                    <div>
                      <a href="채널 이동될 주소">정은땅의 슬기로운 생활</a>
                    </div>
                    <span ClassName="viewDate">조회수랑 날짜</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
