import React from "react";
import SingleComment from "./SingleComment.jsx";
import commentsImg from "../comments.jpg";

export default function Comments({ comments }) {
  return (
    <div className="comments">
      <div id="comments-img">
        <img src={commentsImg} alt="comments poster" />
      </div>
      <div className="feed-header">Post Comments</div>
      {comments.map((comment) => {
        return <SingleComment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
