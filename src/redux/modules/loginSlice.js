import { apis } from "../../lib/axios";
import axios from "axios";

export const __postLogin = async (post) => {
  try {
    const data = await apis.postLogin(post);
    // const data = await axios.post("https://reqres.in/api/login", {
    //   email: "eve.holt@reqres.in",
    //   password: "cityslicka",
    // });
    console.log("post: ", post);
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log(error.response.data.msg);
  }
};

export const __postSignup = async (post) => {
  try {
    const data = await apis.postSignup(post);
    console.log("post: ", post);
    console.log("data: ", data);
    alert("회원가입 성공");
    return data;
  } catch (error) {
    alert("error", error.response.data.msg);
  }
};
