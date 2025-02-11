import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput } from "../redux/slices/PostInputSlice";

const Editor = () => {
  const dispatch = useDispatch();
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

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={userInput.content}
        onChange={handleChange}
        style={{ width: "1000px" }}
      />
    </div>
  );
};

export default Editor;
