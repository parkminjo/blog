import React from "react";
import styled from "styled-components";
import {
  BodyText,
  Heading1,
  Heading2,
  Heading3,
} from "../../styles/typography";
import { Outlet, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CommonLayout = () => {
  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id"));

  const postList = useSelector((state) => state.postList);
  const selectedPost = postList.find((post) => post.id === queryId);

  return (
    <Container>
      <Aside />
      <MainBox>
        <HeaderBox>
          <Heading1 $marginBottom="10px">
            {!queryId ? "전체 글" : selectedPost.title}
          </Heading1>
          {queryId ? (
            <BodyText>
              {new Date(selectedPost.date).toLocaleString("ko-KR")}
            </BodyText>
          ) : null}
        </HeaderBox>
        <Outlet />
      </MainBox>
    </Container>
  );
};

export default CommonLayout;

const Aside = () => {
  return (
    <AsideContainer>
      <ProfileBox>
        <Heading2>profile</Heading2>
      </ProfileBox>
      <SearchBox>
        <SearchInput type="text" />
      </SearchBox>
      <CategoryBox>
        <Heading3>category</Heading3>
      </CategoryBox>
    </AsideContainer>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const AsideContainer = styled.div`
  width: 300px;
  background-color: #dee2e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProfileBox = styled.div`
  margin-bottom: 20px;
`;

const SearchBox = styled.div``;
const SearchInput = styled.input`
  width: 240px;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
`;

const CategoryBox = styled.div`
  margin-bottom: 20px;
`;

const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 7rem 0 7rem;
`;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 5rem 0;
`;
