import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { useDispatch, useSelector } from "react-redux";
import { User } from "./actions/index";
import updateUser from "./actions/index";
import "./App.css";
export interface PostType {
  username: string;
  pfp: string;
  post: string;
  caption: string;
}
function App() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    dispatch(updateUser());
    fetch("/data/post.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(updateUser);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Landing posts={posts} />
    </div>
  );
}

export default App;
