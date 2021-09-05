import React from "react";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { PostType } from "../App";
import Post from "./Post";
const Landing = ({ posts }) => {
  const user = useSelector((state: any) => state.user);
  const story = useRef<any>();
  useEffect(() => {
    if (story.current)
      story.current.scrollBy({
        top: 100,
        left: 1000,
        behavior: "smooth",
      });
  }, []);
  return (
    <div className="container landing">
      <div className="row">
        <div className="col-8">
          <div className="card story">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="story-img">
                <img src={user.profilePicture} alt="" />
              </div>
            ))}
          </div>
          <div className="posts">
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Landing;
