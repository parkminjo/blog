import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PostPage from "../pages/PostPage";
import PostEditor from "../pages/PostEditor";

import { GlobalStyle } from "../styles/GlobalStyle";
import CommonLayout from "../components/layout/CommonLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post-page" element={<PostPage />} />
        </Route>
        <Route path="/post-editor" element={<PostEditor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
