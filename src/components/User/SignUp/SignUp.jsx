import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled, { css } from "styled-components";
import { useInput } from "../../../lib/utils/useInput";
import {
  __checkUserName,
  __postSignup,
} from "../../../redux/modules/loginSlice";
// import { __postSignup } from "../redux/modules/loginSlice";

const SignUp = () => {
  const [username, setUserName] = useInput();
  const [password, setPassword] = useInput();
  const [email, setEmail] = useInput();

  const navigate = useNavigate();

  const onSubmitSignup = (e) => {
    e.preventDefault();
    __postSignup({
      username,
      password,
      email,
    })
      .then((res) => {
        // console.log("signup res: ", res);
        // alert(res.data.msg);
        localStorage.setItem("id", res.headers.authorization);
        navigate("/signin");
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  return (
    <Container>
      <BgLeft>
        <DarkLogo></DarkLogo>
      </BgLeft>
      <BgRight>
        <LoginBox>
          <SignInText>SIGN UP</SignInText>
          <form onSubmit={onSubmitSignup}>
            <SignID htmlFor="username">ID : </SignID>
            <IdInput
              type="text"
              id="username"
              value={username}
              onChange={setUserName}
              placeholder="Please enter your ID"
            ></IdInput>
            <SignPW htmlFor="password">PW : </SignPW>
            <PwInput
              type="password"
              id="password"
              value={password}
              onChange={setPassword}
              placeholder="Please enter your PW"
            ></PwInput>
            {/* <SignCheckPW>PW :</SignCheckPW>
            <IdInput
              check
              type="text"
              placeholder="Please Check your PW"
            ></IdInput> */}
            <SignEmail htmlFor="email">E-mail :</SignEmail>
            <IdInput
              email
              type="text"
              id="email"
              value={email}
              onChange={setEmail}
              placeholder="Please enter your E-mail"
            ></IdInput>
            <SignUpBtn>SIGN UP</SignUpBtn>
          </form>
        </LoginBox>
      </BgRight>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1870px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const BgLeft = styled.div`
  width: 50%;
  height: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DarkLogo = styled.div`
  width: 700px;
  height: 160px;
  position: absolute;
  top: 330px;
  left: 120px;
  background-image: url("/image/dark_logo.jpg");
  background-position: center;
  background-size: 600px;
  background-repeat: no-repeat;
`;

const BgRight = styled.div`
  max-width: 1300px;
  width: 50%;
  height: 100%;
  position: relative;
`;

const LoginBox = styled.div`
  width: 500px;
  height: 580px;
  background-color: rgba(255, 255, 255, 0.281);
  border-radius: 15px;
  position: absolute;
  top: 160px;
  left: 120px;
`;

const SignInText = styled.div`
  position: absolute;
  top: 40px;
  left: 125px;
  width: 250px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

const SignID = styled.label`
  position: absolute;
  top: 175px;
  left: 13px;
  width: 100px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  text-align: center;
  color: white;
  font-size: 26px;
`;

const SignPW = styled.label`
  position: absolute;
  top: 265px;
  left: 10px;
  width: 100px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  text-align: center;
  color: white;
  font-size: 26px;
`;

// const SignCheckPW = styled.label`
//   position: absolute;
//   top: 335px;
//   left: 10px;
//   width: 100px;
//   height: 60px;
//   background-color: rgba(255, 255, 255, 0);
//   font-weight: bold;
//   text-align: center;
//   color: white;
//   font-size: 26px;
// `;

const SignEmail = styled.label`
  position: absolute;
  top: 355px;
  left: 10px;
  width: 100px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  text-align: center;
  color: white;
  font-size: 26px;
`;

const IdInput = styled.input`
  position: absolute;
  top: 170px;
  left: 130px;
  width: 270px;
  height: 35px;
  background-color: #fff;
  border-radius: 7px;
  font-size: 18px;
  padding-left: 10px;

  ${(props) =>
    props.check &&
    css`
      position: absolute;
      top: 330px;
      left: 130px;
      width: 270px;
      height: 35px;
      background-color: #fff;
      border-radius: 7px;
      font-size: 18px;
      padding-left: 10px;
    `}

  ${(props) =>
    props.email &&
    css`
      position: absolute;
      top: 350px;
      left: 130px;
      width: 270px;
      height: 35px;
      background-color: #fff;
      border-radius: 7px;
      font-size: 18px;
      padding-left: 10px;
    `}
`;

const PwInput = styled.input`
  position: absolute;
  top: 260px;
  left: 130px;
  width: 270px;
  height: 35px;
  background-color: #fff;
  border-radius: 7px;
  font-size: 18px;
  padding-left: 10px;
`;

const SignUpBtn = styled.button`
  position: absolute;
  top: 470px;
  left: 130px;
  width: 290px;
  height: 45px;
  background-color: red;
  color: #fff;
  border-radius: 7px;
  font-size: 24px;
`;

export default SignUp;
