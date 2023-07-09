import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import ChannelDetail from "../components/ChannelDetail";
import Search from "../components/Search";
import VideoDetail from "../components/VideoDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
