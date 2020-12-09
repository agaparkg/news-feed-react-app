import React, { Component } from "react";

export default class SingleComment extends Component {
  render() {
    const { comment } = this.props;
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
}
