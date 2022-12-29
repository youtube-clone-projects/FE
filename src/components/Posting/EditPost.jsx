import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postPost } from "../../redux/modules/postSlice";
import { apis } from "../../lib/axios";
import { __editPost } from "../../redux/modules/postSlice";

const EditPost = (props) => {
  const navigate = useNavigate();
  const propsPost = props.post;
  const params = useParams();

  // const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();
  // const [post, setPost] = useState();
  const dispatch = useDispatch();

  const onChangeImage = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    // const file = imgRef.current.files[0];
    console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // const image = reader.result;
      setPost({
        ...post,
        imageUrl: reader.result,
      });
    };
  };

  const [editPost, setEditPost] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apis.getIdPost(params.id).then((res) => {
      setPosts(res.data);
      console.log("useEffect :", res);
    });
  }, [params.id]);

  const onEditHandler = (id, post) => {
    // console.log("수정버튼 누름");
    console.log(editPost);

    const formdata = new FormData();

    const newEditPost = {
      id: params.id,
      title: title.title,
      content: content.content,
      category: editPost.category,
      image: imageFile,
      video: video,
    };
    console.log(newEditPost);

    dispatch(__editPost(newEditPost));
    // navigate(`/detail/${params.id}`);

    for (const pair of formdata) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  const edit_start = () => {
    //왜 e가 들어가는가? event?

    if (window.confirm("게시글 수정 완료!")) {
      navigate("/");
    } else {
      console.log();
    }
    // 여기부분에서 메인 이동 안했을 때
    // 상세페이지에서 업데이트 된 부분 보여줌 좋겠는데! 함 생각해보기
  };

  const onChangeVideo = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
    const reader = new FileReader();
    // const file = imgRef.current.files[0];
    console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // const image = reader.result;
      setPost({
        ...post,
        videoUrl: reader.result,
      });
    };
  };

  // console.log(imageUrl);
  const [imageFile, setImageFile] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState([]);
  const [video, setVideoFile] = useState("");

  console.log(title);
  console.log(content);
  return (
    <>
      <TextUpload>동영상 업로드</TextUpload>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("수정버튼 :");
          onEditHandler(post);
          navigate("/");
        }}
      >
        <Container>
          <LeftContainer>
            <Title
              type="text"
              name="title"
              id="title"
              required
              placeholder="제목을 입력해주세요"
              onChange={(event) => {
                const { value } = event.target;
                setTitle({ ...post, title: value });
              }}
            ></Title>
            <Content
              type="text"
              placeholder="내용을 입력해주세요"
              required
              maxLength={200}
              minLength={10}
              name="content"
              id="content"
              onChange={(event) => {
                const { value } = event.target;
                setContent({ ...post, content: value });
              }}
            ></Content>
          </LeftContainer>
          <RightContainer>
            <Wrap>
              <PreViewText>미리보기 이미지</PreViewText>
              <PreViewContet>
                동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요.
                시청자의 시선을 사로잡을만한 이미지를 사용해 보세요
              </PreViewContet>
              <PreViewContet>자세히 알아보기</PreViewContet>
              <PreView>
                <PreViewInput
                  type="file"
                  // value={imgUrl}
                  encType="multipart/form-data"
                  onChange={onChangeVideo}
                ></PreViewInput>
                <PreViewInput></PreViewInput>
              </PreView>
              <Wrap>
                <CategoryText>카테고리</CategoryText>
                <CategoryContet>
                  카테고리를 추가해 주세요 카테고리 별로 동영상을 찾기
                  쉬워집니다.
                </CategoryContet>
                <SelectBox
                  name="category"
                  id="category"
                  required
                  onChange={(event) => {
                    const { value } = event.target;
                    setEditPost({ ...post, category: value });
                  }}
                >
                  {" "}
                  <option selected>카테고리 선택</option>
                  <option value="스포츠">스포츠</option>
                  <option value="게임">게임</option>
                  <option value="음식">음식</option>
                </SelectBox>
              </Wrap>
            </Wrap>
          </RightContainer>
        </Container>
        <UploadWrap>
          <UploadText htmlFor="video-upload">업로드</UploadText>

          <UploadInput
            type="file"
            ref={imgRef}
            // value={imgUrl}
            encType="multipart/form-data"
            onChange={onChangeImage}
          />
        </UploadWrap>
        <SelectBtn
          add
          // onClick={() => {
          //   edit_start(propsPost);
          // }}
          type="submit"
        >
          게시글 수정 완료
        </SelectBtn>
      </form>
    </>
  );
};

export default EditPost;

const TextUpload = styled.div`
  font-size: 36px;
  color: #fff;
  margin-bottom: 30px;
  margin-top: 94px;
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
const PreViewInput = styled.input`
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
