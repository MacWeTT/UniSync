import React from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import Search from "../components/Search/Search";
import Topbar from "../components/Topbar/Topbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <Search />
      <ProjectList />
    </>
  );
};

export default Home;
