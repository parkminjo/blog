import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  BodyText,
  CaptionText,
  Heading1,
  Heading2,
} from "../styles/typography";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const postList = useSelector((state) => state.postList);
  const navigate = useNavigate();

  return (
    <PostContainer>
      {postList.map((post) => {
        return (
          <PostBox
            key={post.id}
            onClick={() => navigate(`/post-page?id=${post.id}`)}
          >
            <Heading2 $marginBottom="14px">{post.title}</Heading2>

            <BodyText $marginBottom="10px">
              {new Date(post.date).toLocaleString("ko-KR")}
            </BodyText>

            <BodyTextBox>
              <BodyText>{post.content}</BodyText>
            </BodyTextBox>
          </PostBox>
        );
      })}
    </PostContainer>
  );
};

export default PostList;

const PostContainer = styled.div``;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  cursor: pointer;
`;

const BodyTextBox = styled.div`
  max-height: 90px;
  overflow: hidden;
`;
