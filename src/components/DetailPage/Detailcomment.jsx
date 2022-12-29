import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  __deleteComments,
  __editComments,
} from "../../redux/modules/detailSlice";
import { useDispatch } from "react-redux";

const Detailcomment = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    comment,
    // editComment,
    // setEditComment,
    id,
    // dispatch,
    // __deleteComments,
    // __editComments,
  } = props;

  const [isCommentChange, setIsCommentChange] = useState(false);
  const [editComment, setEditComment] = useState(comment.comment);
  const onClickCommentEditButtonHandler = (commentId, editComment) => {
    if (isCommentChange === false) {
      setIsCommentChange(true);
    } else {
      console.log(editComment);
      dispatch(__editComments([commentId, editComment, id]));
      setIsCommentChange(false);
      navigate(`/detail/${id}`);
    }
  };
  console.log(comment);

  return (
    <StDiv key={comment.id}>
      <StDiv>
        <StDiv comments>{comment.username}</StDiv>
      </StDiv>
      <StDiv wrap>
        {isCommentChange === false ? (
          <StDiv comments>{comment.comment}</StDiv>
        ) : (
          <StInput
            type="text"
            // defaultValue={comment.comment}
            value={editComment}
            onChange={(e) => {
              // setEditComment({
              //   ...editComment,
              //   postId: Number(id),
              //   id: comment.id,
              setEditComment(e.target.value);
              // });
            }}
          ></StInput>
        )}

        <StA
          select_btn
          onClick={() => {
            onClickCommentEditButtonHandler(comment.id, editComment);
          }}
        >
          수정
        </StA>
        <StA
          cancel_btn
          onClick={() => {
            console.log(comment.id);
            dispatch(__deleteComments(comment.id, id));
          }}
        >
          삭제
        </StA>
      </StDiv>
    </StDiv>
  );
};

export default Detailcomment;

const StDiv = styled.div`
  ${(props) =>
    props.background &&
    css`
      width: 100vw;
      height: 100vh;
      min-height: 1100px;
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0.1)
        ),
        url("/img/bg1.jpg");
      background-size: cover;
      background-position: center;
    `}
  ${(props) =>
    props.inner &&
    css`
      max-width: 1200px;
      min-width: 800px;
      margin: 0 auto;
      padding-top: 30px;
    `}
    ${(props) =>
    props.post &&
    css`
      max-width: 900px;
      min-width: 600px;
      height: 520px;
      margin: 90px auto 0 auto;
      padding-top: 15px;
      background-color: #457089;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.8);
      border-radius: 20px;
    `}
    ${(props) =>
    props.titles &&
    css`
      width: 1000px;
      margin: 20px 0 20px 120px;
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    `}
    ${(props) =>
    props.nickname &&
    css`
      margin: 24px 0 30px 120px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    `}
    ${(props) =>
    props.content &&
    css`
      width: 660px;
      height: 250px;
      background-color: #fff;
      color: #457089;
      margin: 0 auto;
      padding: 10px;
      font-size: 18px;
      border-radius: 10px;
    `}

    ${(props) =>
    props.wrap &&
    css`
      display: flex;
      direction: row;
      align-items: center;
      justify-content: left;
      margin: 2px 0 20px 0;
    `}
    ${(props) =>
    props.post_wrap &&
    css`
      display: flex;
      direction: row;
      align-items: center;
      justify-content: center;
      margin: 15px 0 20px 0;
    `}

    ${(props) =>
    props.like &&
    css`
      margin: 24px 0 30px 20px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    `}
    ${(props) =>
    props.mbti &&
    css`
      margin: 24px 0 30px 20px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    `}
    ${(props) =>
    props.comment &&
    css`
      max-width: 900px;
      min-width: 600px;
      height: 400px;
      margin: 30px auto 0 auto;
      padding-top: 30px;
      background-color: #457089;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.8);
      border-radius: 20px;
    `}
    ${(props) =>
    props.comment_box &&
    css`
      width: 660px;
      height: 250px;
      background-color: #fff;
      color: #457089;
      margin: 0 auto;
      padding: 20px;
      font-size: 18px;
      border-radius: 10px;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none; /* Chrome , Safari , Opera */
      }
    `}
    ${(props) =>
    props.comments &&
    css`
      margin-right: 10px;
    `}
    ${(props) =>
    props.comment_name &&
    css`
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      margin-right: 10px;
    `}
    ${(props) =>
    props.comments_box &&
    css`
      width: 660px;
      margin: 30px auto 0 auto;
    `}
`;

const StA = styled.a`
  width: 55px;
  height: 35px;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  background-color: #fff;
  color: #457089;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: 0.3s;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #5aacc3;
  &:hover {
    background-color: #5aacc3;
    color: #fff;
  }
  ${(props) =>
    props.select_btn &&
    css`
      width: 55px;
      height: 35px;
      padding: 10px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      background-color: #fff;
      border: 2px solid #5aacc3;
      color: #457089;
      cursor: pointer;
      box-sizing: border-box;
      display: block;
      transition: 0.3s;
      border-radius: 10px;
      text-decoration: none;
      margin-left: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #5aacc3;
        color: #fff;
      }
    `}
  ${(props) =>
    props.cancel_btn &&
    css`
      margin-left: 5px;
      background-color: #5aacc3;
      color: #fff;

      &:hover {
        background-color: #fff;
        border: 2px solid #5aacc3;
        color: #457089;
      }
    `}
`;

const StInput = styled.input`
  width: 503px;
  height: 35px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #fff;
`;
