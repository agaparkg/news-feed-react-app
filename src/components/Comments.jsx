import React from "react";
import SingleComment from "./SingleComment.jsx";

export default function Comments({ comments }) {
  return (
    <div className="comments">
      <div className="feed-header">Post Comments</div>
      {comments.map((comment) => {
        return <SingleComment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
