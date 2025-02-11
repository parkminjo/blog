import React from "react";
import styled from "styled-components";
import {
  BodyText,
  Heading1,
  Heading2,
  Heading3,
} from "../../styles/typography";
import { Outlet, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faTrash,
  faChevronUp,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { removePost } from "../../redux/slices/PostSlice";
import { setUserInput } from "../../redux/slices/PostInputSlice";

const CommonLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id")) || null;

  const postList = useSelector((state) => state.postList || []);
  const selectedPost = postList.find((post) => post.id === queryId) || {};

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch(removePost(id));
    navigate(-1);
  };

  const handleAddUpdate = () => {
    /** 게시글 수정 */
    if (queryId) {
      dispatch(
        setUserInput({
          title: selectedPost.title,
          content: selectedPost.content,
        })
      );
      navigate(`/post-editor?id=${queryId}`);
      return;
    }

    /** 게시글 추가 */
    navigate("/post-editor");
  };

  return (
    <Container>
      <Aside />
      <MainBox>
        <HeaderBox>
          <Heading1 $marginBottom="10px">
            {!queryId
              ? "전체 글"
              : selectedPost
              ? selectedPost.title
              : "게시글 없음"}
          </Heading1>
          {queryId ? (
            <BodyText>
              {new Date(selectedPost.date).toLocaleString("ko-KR")}
            </BodyText>
          ) : null}
        </HeaderBox>
        <Outlet />
        <ButtonBox>
          {queryId ? (
            <DeleteButton onClick={() => handleDelete(queryId)}>
              <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
          ) : null}
          <WritePostButton onClick={handleAddUpdate}>
            {queryId ? (
              <FontAwesomeIcon icon={faPenToSquare} />
            ) : (
              <FontAwesomeIcon icon={faPenNib} />
            )}
          </WritePostButton>
          <GoToTopButton onClick={goToTop}>
            <FontAwesomeIcon icon={faChevronUp} />
          </GoToTopButton>
        </ButtonBox>
      </MainBox>
    </Container>
  );
};

export default CommonLayout;

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
const DeleteButton = styled(CommonButton)``;

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
