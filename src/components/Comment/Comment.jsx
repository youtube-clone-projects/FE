import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __addComment,
  __deleteComment,
  __changeComment,
  __getComment,
} from "../../redux/modules/commentSlice";
// import EditComment from "./EditComment";

const Comments = ({ isLogin }) => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state.comment);

  const [addComment, setAddComment] = useState({
    comment: "",
  });

  useEffect(() => {
    dispatch(__getComment({ postId: id }));
  }, [dispatch, id]);

  const onClickAddCommentHandler = () => {
    if (isLogin) {
      dispatch(__addComment([addComment, id]));
      setAddComment({
        comment: "",
      });
    } else {
      alert("로그인 후 이용가능합니다.");
    }
  };
  console.log(comments);
  return (
    <CommentBox>
      <CommentP>댓글</CommentP>

      {/* {comments.map((comment) => (
        <EditComment comment={comment} isLogin={isLogin} />
      ))} */}

      <Reviewtext
        value={addComment.comment}
        placeholder="댓글추가..."
        onChange={(e) => {
          setAddComment({
            ...addComment,
            comment: e.target.value,
          });
        }}
      ></Reviewtext>

      <Upload onClick={onClickAddCommentHandler}>댓글</Upload>
    </CommentBox>
  );
};

const CommentBox = styled.div`
  max-width: 1300px;
  height: auto;
  background-color: red;
  padding: 5px 10px 10px 10px;
  margin: 20px 0 0 20px;
  border-radius: 10px;
`;

const CommentP = styled.p`
  color: white;
  background-color: transparent;
`;

// const Wrap = styled.div`
//   width: 998.037px;
//   height: 71.5px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const Reviewtext = styled.input`
  width: 983.037px;
  height: 71.5;
  resize: none;
  border: 0 solid #0f0f0f;
  border-bottom: 2px solid #474747;
  background-color: transparent;
  color: white;
  font-size: 20px;
  outline: none;
  margin-bottom: 10px;
`;

const Upload = styled.button`
  width: 60px;
  height: 36px;
  border-radius: 30px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  margin-top: 10px;
  margin-left: 920px;
  font-size: 18px;
  &:hover {
    background-color: #65b8ff;
    border: none;
    color: black;
  }
`;

export default Comments;
