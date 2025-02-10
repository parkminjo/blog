import React from "react";
import styled from "styled-components";
import { Heading1, Heading2, Heading3 } from "../../styles/typography";

const HomeLayout = ({ children }) => {
  return (
    <Container>
      <Aside />
      <MainBox>
        <HeaderBox>
          <Heading1>카테고리 제목</Heading1>
        </HeaderBox>
        {children}
      </MainBox>
    </Container>
  );
};

export default HomeLayout;

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
  height: 100vh;
`;

const AsideContainer = styled.div`
  width: 300px;
  background-color: #a27b5c;
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
