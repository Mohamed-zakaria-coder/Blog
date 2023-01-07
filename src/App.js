import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./components/Login";
import Footer from "./components/shared/Footer";
import Register from "./components/Register";
import BlogDescription from "./components/BlogDescription";
import CreatePost from "./components/CreatePost";
import MyAccount from "./components/MyAccount";
import Data from './Data.json'
import { useState } from "react";

function App() {
  const [blogData, setBlogData] = useState([])
  function handleData(id){
    setBlogData(() => Data.blogs.filter(blog => blog.id === id))
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home handleData={handleData}/>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="description" element={<BlogDescription blogData={blogData}/>}></Route>
        <Route path="post" element={<CreatePost/>}></Route>
        <Route path="account" element={<MyAccount/>}></Route>
        <Route path="*" element={<Home  handleData={handleData}/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
