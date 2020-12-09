import React from "react";
import SinglePost from "./SinglePost.jsx";
import "../App.css";

export default function Posts({ posts, handleCommentsClick }) {
  return (
    <div className="news-feed">
      <div className="feed-header">News Feed</div>
      <div className="feed-posts">
        {posts.map((post) => {
          return (
            <SinglePost
              key={post.id}
              post={post}
              handleCommentsClick={handleCommentsClick}
            />
          );
        })}
      </div>
    </div>
  );
}
