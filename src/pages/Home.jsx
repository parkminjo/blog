import React from "react";
import PostList from "../components/PostList";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <PostList />
      <ButtonBox>
        <WritePostButton onClick={() => navigate("/post-editor")}>
          <FontAwesomeIcon icon={faPenNib} />
        </WritePostButton>
        <GoToTopButton onClick={goToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </GoToTopButton>
      </ButtonBox>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 35px;
  right: 35px;
  display: flex;
  gap: 10px;
`;

const CommonButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  border: none;
  background-color: #dee2e6;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #bfc2c4;
  }
`;

const WritePostButton = styled(CommonButton)``;
const GoToTopButton = styled(CommonButton)``;
