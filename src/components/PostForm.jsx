import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addPost } from "../redux/slices/PostSlice";
import { setUserInput } from "../redux/slices/PostInputSlice";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInput = useSelector((state) => state.postInput);

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(
      setUserInput({
        ...userInput,
        [id]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        ...userInput,
        id: new Date().getTime(),
        date: new Date().toISOString(),
      })
    );

    dispatch(
      setUserInput({
        title: "",
        content: "",
      })
    );
  };

  return (
    <Container
      onSubmit={() => {
        handleSubmit;
        navigate("/");
      }}
    >
      <Header></Header>
      <MainBox>
        <TitleInput
          type="text"
          id="title"
          placeholder="제목"
          value={userInput.title}
          onChange={handleChange}
        />
        <ContentInput
          type="text"
          id="content"
          placeholder="내용"
          value={userInput.content}
          onChange={handleChange}
        />
      </MainBox>
      <Footer>
        <AddButton>등록</AddButton>
      </Footer>
    </Container>
  );
};

export default PostForm;

const Container = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dee2e6;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  box-sizing: border-box;
  padding: 0 2rem 0 2rem;
`;

const MainBox = styled.div`
  width: 900px;
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 3rem;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  height: 50px;
  font-size: 32px;
`;
const ContentInput = styled.textarea`
  width: 100%;
  border: none;
  background-color: transparent;
  flex: 1;
  font-size: 16px;
  margin-top: 1rem;
`;

const Footer = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  box-sizing: border-box;
  padding: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const AddButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 2rem;
  cursor: pointer;
  background-color: #dee2e6;
  font-weight: 500;

  &:hover {
    background-color: #bfc2c4;
  }
`;
