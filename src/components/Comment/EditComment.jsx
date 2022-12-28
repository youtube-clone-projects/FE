import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __addComment,
  __deleteComment,
  __getComment,
  __editComment,
} from "../../redux/modules/commentSlice";

const EditComment = ({ comment, isLogin }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, error } = useSelector((state) => state.comment);

  console.log(comment);

  const onClickDeleteCommentHandler = (commentId) => {
    if (isLogin) {
      dispatch(__deleteComment({ postId: id, commentId: commentId }));
    } else {
      alert("로그인 후 이용가능합니다.");
    }
  };
  const [isCommentChange, setIsCommentChange] = useState(false);

  const [editComment, setEditComment] = useState({
    comment: "",
  });

  console.log(isLogin);
  const onClickEditCommentButtonHandler = (commentId) => {
    if (isLogin) {
      if (isCommentChange === false) {
        setIsCommentChange(true);
      } else {
        dispatch(
          __editComment({
            editComment: editComment,
            postId: id,
            commentId: commentId,
          })
        );
        setIsCommentChange(false);
      }
    } else {
      alert("로그인 후 이용가능합니다.");
    }
  };

  // if (isLoading) {
  //   return <div>댓글 불러오는 중...</div>;
  // }

  return (
    <Div>
      <Comment>
        {isCommentChange === false ? (
          <CommentTexts>
            <CommentNickname>{comment.nickname}</CommentNickname>
            <CommentText>{comment.comment}</CommentText>
          </CommentTexts>
        ) : (
          <CommentEditInput>
            <CommentText>{comment.nickname}</CommentText>
            <input
              type="text"
              onChange={(e) => {
                setEditComment({
                  ...editComment,
                  comment: e.target.value,
                });
                console.log(editComment);
              }}
            ></input>
          </CommentEditInput>
        )}

        <div>
          <Reviewbtn
            onClick={() => {
              onClickEditCommentButtonHandler(comment.commentId);
            }}
          >
            수정
          </Reviewbtn>
          <Reviewbtn
            onClick={() => {
              onClickDeleteCommentHandler(comment.commentId);
            }}
          >
            삭제
          </Reviewbtn>
        </div>
      </Comment>
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 20px;
`;

const Comment = styled.div`
  width: 850px;
  height: 40px;
  outline: none;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentTexts = styled.div`
  display: flex;
`;

const CommentText = styled.div`
  margin-right: 15px;
`;

const CommentNickname = styled.div`
  margin-right: 15px;
  /* padding-right: 15px;
  border-right: 2px solid white; */
  color: blueviolet;
`;

const Reviewbtn = styled.button`
  width: 60px;
  height: 40px;
  border: 3px solid white;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  &:hover {
    background-color: blueviolet;
    border: none;
    color: white;
  }
  margin-left: 15px;
`;

const CommentEditInput = styled.div`
  display: flex;
`;

export default EditComment;
