import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { setUserInput } from "../redux/slices/PostInputSlice";
import { addPost, updatePost } from "../redux/slices/PostSlice";

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInput = useSelector((state) => state.postInput);

  const [searchParams] = useSearchParams();
  const queryId = parseInt(searchParams.get("id")) || null;

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
