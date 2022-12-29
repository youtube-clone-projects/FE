import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { useInput } from "../../../lib/utils/useInput";
import { __postLogin } from "../../../redux/modules/loginSlice";
import { Link } from "react-router-dom";

// LOGIN
const Login = () => {
  const [username, setUserName] = useInput();
  const [password, setPassword] = useInput();
  const navigate = useNavigate();

  // LOGIN
  const onSubmitLogin = (e) => {
    e.preventDefault();
    __postLogin({
      username,
      password,
    })
      .then((res) => {
        console.log("res: ", res);
        if (res.data.statusCode === 200) {
          alert("로그인 성공!");
        }
        console.log(res.headers.authorization);
        localStorage.setItem("id", res.headers.authorization);
        localStorage.setItem("username", res.data.username);
        navigate("/");
      })
      .catch((error) => alert("ID 또는 비밀번호가 틀립니다"));
    // .catch((error) => alert(error.response.data.msg));
  };

  return (
    <Container>
      <BgLeft>
        <DarkLogo></DarkLogo>
      </BgLeft>
      <BgRight>
        <LoginBox>
          <SignInText>SignIn</SignInText>
          <form onSubmit={onSubmitLogin}>
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
              placeholder="Please enter your PIN number"
            ></PwInput>
            <SignInBtn>Sign In</SignInBtn>
          </form>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <SignUpBtn>Sign Up</SignUpBtn>
          </Link>
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

const SignInText = styled.label`
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
  left: 2px;
  width: 100px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  text-align: center;
  color: white;
  font-size: 30px;
`;

const SignPW = styled.label`
  position: absolute;
  top: 255px;
  left: 10px;
  width: 100px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  text-align: center;
  color: white;
  font-size: 30px;
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

const SignInBtn = styled.button`
  position: absolute;
  top: 360px;
  left: 130px;
  width: 290px;
  height: 45px;
  background-color: red;
  color: #fff;
  border-radius: 7px;
  font-size: 24px;
`;
const SignUpBtn = styled.button`
  position: absolute;
  top: 450px;
  left: 130px;
  width: 290px;
  height: 45px;
  background-color: #fff;
  border-radius: 7px;
  font-size: 24px;
`;

export default Login;
