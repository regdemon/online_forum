import React, { Component } from "react"
import './App.css';
import Newnav from "./components/Newnav";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

function App() {
  return (
    <div className="main-body">
      <Newnav />
      <Header/>
      <CreatePost/>
      <Post />
    </div>
  );
}

export default App;
