import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PostPage from "../pages/PostPage";
import PostEditor from "../pages/PostEditor";
import HomeLayout from "../components/layout/HomeLayout";
import { GlobalStyle } from "../styles/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HomeLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-page" element={<PostPage />} />
          <Route path="/post-editor" element={<PostEditor />} />
        </Routes>
      </HomeLayout>
    </BrowserRouter>
  );
};

export default Router;
