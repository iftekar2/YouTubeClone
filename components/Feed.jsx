import { useState, useEffect } from "react";
import "./Style.css";
import Sidebar from "./Sidebar";

function Feed() {
  return (
    //This is Feed Page
    <section className="feedPage">
      {/* This is sideNavbar Section */}
      <section className="sideNavbar">
        <div className="sideBar">
          <Sidebar />
          <p className="copyRight">Copyright 2023 Iftekar Hossain</p>
        </div>
      </section>

      {/* This is Content Section*/}
      <section className="content"></section>
    </section>
  );
}

export default Feed;
