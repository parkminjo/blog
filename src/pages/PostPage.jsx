import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { BodyText } from "../styles/typography";

const PostPage = () => {
  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id"));

  const postList = useSelector((state) => state.postList);
  const selectedPost = postList.find((post) => post.id === queryId);

  return (
    <PostPageContainer>
      <BodyText>{selectedPost.content}</BodyText>
    </PostPageContainer>
  );
};

export default PostPage;

const PostPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
