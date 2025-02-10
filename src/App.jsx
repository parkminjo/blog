import React, { useEffect } from "react";
import Router from "./shared/Router";
import { useSelector } from "react-redux";

const App = () => {
  const postList = useSelector((state) => state.postList);

  useEffect(() => {
    localStorage.setItem("postList", JSON.stringify(postList));
  }, [postList]);

  return <Router />;
};

export default App;
