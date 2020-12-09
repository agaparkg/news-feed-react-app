import React from "react";

export default function SingleComment({ comment }) {
  return (
    <div className="single-comment">
      <div>
        <strong>
          Post {comment.postId} / Comment {comment.id}
        </strong>
      </div>
      <div className="comment-by">
        <b>Comment by:</b> {comment.email}
      </div>
      <div className="comment-content">
        <b>Comment Content:</b> {comment.body}
      </div>
    </div>
  );
}
