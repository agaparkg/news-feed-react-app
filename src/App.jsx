import React, { Component } from "react";
import Posts from "./components/Posts.jsx";
import Comments from "./components/Comments.jsx";
import "./App.css";

const url = "https://jsonplaceholder.typicode.com/posts";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((posts) => this.setState({ posts }))
      .catch((err) => console.log(err));
  }

  handleCommentsClick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((comments) => this.setState({ comments }))
      .catch((err) => console.log(err));
  };

  render() {
    const { posts, comments } = this.state;
    return (
      <div className="App">
        <Posts posts={posts} handleCommentsClick={this.handleCommentsClick} />
        <Comments comments={comments} />
      </div>
    );
  }
}
