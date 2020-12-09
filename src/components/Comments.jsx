import React, { Component } from "react";
import SingleComment from "./SingleComment.jsx";

export default class Comments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div className="comments">
        <div id="comments-img">
          <img src={require("../comments.jpg")} alt="" />
        </div>
        <div className="feed-header">Post Comments</div>
        {comments.map((comment) => {
          return <SingleComment key={comment.id} comment={comment} />;
        })}
      </div>
    );
  }
}
