import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postPost, __editPost } from "../../redux/modules/postSlice";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    videoFile: "",
    imageFile: "",
    category: "",
  });

  const onClickHandler = () => {
    if (post.title === "" || post.title.length >= 30) {
      alert("30자이내의 제목을 입력해주세요");
    } else if (post.category === "") {
      alert("카테고리를 선태해주세요!");
    } else if (post.content === "") {
      alert("내용을 입력해주세요!");
    } else if (post.videoFile === "" || post.imageFile === "") {
      alert("파일을 삽입 해 주세요");
    } else {
      dispatch(__postPost(post));
      console.log(post);
      navigate("/");
    }
  };

  const edit_post = (num, post) => {
    // console.log("수정버튼 누름");
    // console.log(editPost);
    const newEditPost = {
      num: num,
      // videoFile: editPost.videoFile,
      // imageFile: editPost.imageFile,
      // title: editPost.title,
      // username: editPost.username,
    };
    console.log(newEditPost);
    dispatch(__editPost(newEditPost));
    // navigate(`/detail/${params.id}`);
  };

  return (
    <>
      <TextUpload>동영상 업로드</TextUpload>
      <Container>
        <LeftContainer>
          <Title
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={(event) => {
              const { value } = event.target;
              setPost({ ...post, title: value });
            }}
          ></Title>
          <Content
            type="text"
            placeholder="내용을 입력해주세요"
            onChange={(event) => {
              const { value } = event.target;
              setPost({ ...post, content: value });
            }}
          ></Content>
        </LeftContainer>
        <RightContainer>
          <Wrap>
            <PreViewText>미리보기 이미지</PreViewText>
            <PreViewContet>
              동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요. 시청자의
              시선을 사로잡을만한 이미지를 사용해 보세요
            </PreViewContet>
            <PreViewContet>자세히 알아보기</PreViewContet>
            <PreView>
              <PreViewInput>미리보기 이미지 업로드</PreViewInput>
              <PreViewInput></PreViewInput>
            </PreView>
            <Wrap>
              <CategoryText>카테고리</CategoryText>
              <CategoryContet>
                카테고리를 추가해 주세요 카테고리 별로 동영상을 찾기 쉬워집니다.
              </CategoryContet>
              <SelectBox
                onChange={(event) => {
                  const { value } = event.target;
                  setPost({ ...post, cateMbti: value });
                }}
              >
                <option value="" selected>
                  카테고리 선택
                </option>
                <option value="스포츠">스포츠</option>
                <option value="게임">게임</option>
                <option value="음식">음식</option>
              </SelectBox>
            </Wrap>
          </Wrap>
        </RightContainer>
      </Container>
      <UploadWrap>
        <UploadText htmlFor="video">업로드</UploadText>

        <UploadInput
          type="file"
          id="video"
          name="video"
          accept="image/png, image/jpeg, image/jpg, video/mp4"
        ></UploadInput>
      </UploadWrap>
      <SelectBtn onClick={onClickHandler}>게시글 수정</SelectBtn>
    </>
  );
};

export default EditPost;

const TextUpload = styled.div`
  font-size: 36px;
  color: #fff;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  border-radius: 5px;
`;

const LeftContainer = styled.div`
  width: 850px;
  height: 450px;
`;
const RightContainer = styled.div`
  width: 500px;
  height: 450px;
  margin-left: 100px;
`;

const Title = styled.textarea`
  width: 700px;
  height: 100px;
  background-color: #282828;
  font-size: 24px;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px 5px 0 0;
`;

const Content = styled.textarea`
  width: 700px;
  height: 250px;
  background-color: #282828;
  border-radius: 0 0 5px 5px;
  color: #fff;
  padding: 10px 20px;
  font-size: 24px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const PreViewText = styled.span`
  font-size: 24px;
  color: #fff;
`;
const PreViewContet = styled.div`
  font-size: 18px;
  color: gray;
  margin-left: 10px;
  margin-bottom: 10px;
`;
const PreView = styled.div`
  display: flex;
  flex-direction: row;
`;
const PreViewInput = styled.button`
  width: 215px;
  height: 100px;
  color: #fff;
  margin-bottom: 15px;
  background-color: #282828;
  border-radius: 5px;
  margin-left: 5px;
  /* border: 1px solid gray; */
`;
const CategoryText = styled.span`
  font-size: 24px;
  color: #fff;
`;
const CategoryContet = styled.span`
  font-size: 18px;
  color: gray;
  margin-left: 10px;
`;
const SelectBox = styled.select`
  width: 250px;
  height: 50px;
  margin-top: 15px;
  border: 3px solid;
  border-color: rgba(255, 255, 255, 0.281);
  background-color: #fff;
  color: rgb(5, 5, 5);
`;

const UploadWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;
const UploadText = styled.label`
  font-size: 28px;
  color: #fff;
  margin-top: 15px;
`;

const UploadInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 20px 0 0 10px;
  color: #fff;
`;

const SelectBtn = styled.button`
  width: 330px;
  height: 60px;
  margin-top: 15px;
  color: #fff;
  background-color: rgb(61, 164, 253);
`;
