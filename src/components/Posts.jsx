import React, { Component } from "react";
import SinglePost from "./SinglePost.jsx";
import "../App.css";

export default class Posts extends Component {
  render() {
    const { posts, handleCommentsClick } = this.props;
    return (
      <div className="news-feed">
        <div className="feed-header">News Feed</div>
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
    );
  }
}
