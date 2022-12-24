import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { RiLiveLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="headLeft">
          <div className="headLeftIcon">
            <AiOutlineMenu className="categoryMenu" />

            <div className="darkLogoBox">
              <img
                className="darkLogo"
                alt="dark_logo"
                src="image/dark_logo.jpg"
              />
              <div className="logoKr">KR</div>
            </div>
          </div>
        </div>
        <div className="headMiddle">
          <div className="headMiddleSearch">
            <input className="headMiddleSearchInput" placeholder="검색" />
          </div>
          <div className="headMiddleBtn">
            <IoSearchOutline className="headMiddleIcon" />
          </div>
          <div className="headMiddleIconMic">
            <IoMdMic className="headMiddleIcon2" />
          </div>
        </div>
        <div className="headRight">
          <div className="headRigntPersonal">
            <div className="headRigntPersonalBox">
              <RiLiveLine className="headRigntIcon3" />
            </div>
            <div className="headRigntPersonalBox">
              <BsBell className="headRigntIcon3" />
            </div>
            <div className="headRigntPersonalBox2">
              <div className="profileImg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
