import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BodyText, Heading2 } from "../styles/typography";

const PostList = () => {
  const postList = useSelector((state) => state.postList || []);
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
              <BodyText>
                {post.content.replace(/<[^>]*>/g, "").slice(0, 300)}
              </BodyText>
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

  &:hover {
    h2 {
      color: #854836;
    }
  }
`;

const BodyTextBox = styled.div`
  overflow: hidden;
`;
