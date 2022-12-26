import React from "react";
import styled, { css } from "styled-components";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { RiLiveLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

function Header() {
  return (
    <Navbar>
      <HeadLeft>
        <HeadLeftIcon>
          <AiOutlineMenu className="categoryMenu" />
          <DarkLogoBox>
            <DarkLogo alt="dark_logo" src="image/dark_logo.jpg" />
            <LogoKr>KR</LogoKr>
          </DarkLogoBox>
        </HeadLeftIcon>
      </HeadLeft>
      <HeadMiddle>
        <HeadMiddleSearch>
          <HeadMiddleSearchInput placeholder="검색" />
        </HeadMiddleSearch>
        <HeadMiddleBtn>
          <IoSearchOutline className="headMiddleIcon" />
        </HeadMiddleBtn>
        <HeadMiddleIconMic>
          <IoMdMic className="headMiddleIcon2" />
        </HeadMiddleIconMic>
      </HeadMiddle>
      <HeadRight>
        <HeadRigntPersonal>
          <HeadRigntPersonalBox>
            <RiLiveLine className="headRigntIcon3" />
          </HeadRigntPersonalBox>
          <HeadRigntPersonalBox>
            <BsBell className="headRigntIcon3" />
          </HeadRigntPersonalBox>
          <HeadRigntPersonalBox2>
            <ProfileImg></ProfileImg>
          </HeadRigntPersonalBox2>
        </HeadRigntPersonal>
      </HeadRight>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.nav`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background-color: #0f0f0f;
  display: flex;
  align-items: center;
`;

const HeadLeft = styled.div`
  width: 169px;
  height: 56px;
`;

const HeadLeftIcon = styled.div`
  display: flex;
  align-items: center;
`;

const DarkLogoBox = styled.div`
  width: 140px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkLogo = styled.img`
  width: 95px;
  height: 23px;
  cursor: pointer;
`;

const LogoKr = styled.div`
  color: #aaaaaa;
  font-size: 11px;
  display: flex;
  margin-top: -20px;
`;

const HeadMiddle = styled.div`
  width: 644px;
  height: 40px;
  /* background-color: pink; */
  margin: auto;
  display: flex;
`;

const HeadMiddleSearch = styled.div`
  width: 540px;
  height: 36px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  /* background-color: blueviolet; */
  display: flex;
  align-items: center;
  border: 2px solid #303030;
`;

const HeadMiddleSearchInput = styled.input`
  width: 464px;
  height: 20px;
  display: flex;
  margin: auto;
  background-color: #0f0f0f;
  border: 0 solid #0f0f0f;
  color: white;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const HeadMiddleBtn = styled.div`
  width: 64px;
  height: 40px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadMiddleIconMic = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadRight = styled.div`
  height: 40px;
  min-width: 225px;
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
`;

const HeadRigntPersonal = styled.div`
  width: 156px;
  height: 40px;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeadRigntPersonalBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadRigntPersonalBox2 = styled.div`
  width: 60px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: blueviolet;
  cursor: pointer;
`;
