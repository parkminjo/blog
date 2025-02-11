import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { setUserInput } from "../redux/slices/PostInputSlice";
import { addPost, updatePost } from "../redux/slices/PostSlice";

const PostForm = () => {
  const API_KEY =
    "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDA1Mjc5OTksImp0aSI6ImM1ODc4NzZmLWI0YzMtNDdlYS05ODk3LThjNGI3ZmQ2N2I2MyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjUyMGVjY2NjIn0.adO9RNrpTTTEzRIc8qVApdeLWyFAoPeUGBGj0X6G-HG5KA8S43WdqusjxpvcbxIhub7PX-orDbYzM6Nc75s7ng";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInput = useSelector((state) => state.postInput);

  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id")) || null;

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

    if (!userInput.title) {
      toast.error("제목을 입력하세요");
      return;
    }
    if (!userInput.content) {
      toast.error("내용을 입력하세요");
      return;
    }

    /** 게시글 추가 및 등록 */
    if (!queryId) {
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
      navigate("/");
    } else {
      dispatch(
        updatePost({
          ...userInput,
          id: queryId,
        })
      );

      dispatch(
        setUserInput({
          title: "",
          content: "",
        })
      );
      navigate("/");
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
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
        <AddButton>{queryId ? "수정" : "등록"}</AddButton>
      </Footer>
      <ToastContainer
        position="top-center"
        newestOnTop={true}
        autoClose={1000}
        transition={Slide}
      />
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
  /* height: 60px;
  box-sizing: border-box;
  padding: 0 2rem 0 2rem; */
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
