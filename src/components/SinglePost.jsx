import React from "react";
import { Button } from "reactstrap";

export default function SinglePost({ post, handleCommentsClick }) {
  return (
    <div className="single-post">
      <div>
        <strong>
          User {post.userId} / Post {post.id}
        </strong>
      </div>
      <div className="post-title">
        <b>Post Title:</b> {post.title}
      </div>
      <div className="post-content">
        <b>Post Content:</b> {post.title}
      </div>
      <div className="comments-btn">
        <Button color="primary" onClick={() => handleCommentsClick(post.id)}>
          Comments
        </Button>
      </div>
    </div>
  );
}
