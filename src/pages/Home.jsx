import React from "react";
import PostList from "../components/PostList";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <PostList />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
`;
