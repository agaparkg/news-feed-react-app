import React, { useEffect, useState } from "react";
import Posts from "./components/Posts.jsx";
import Comments from "./components/Comments.jsx";
import "./App.css";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((err) => console.log(err));
  });

  const handleCommentsClick = (id) => {
    setComments([]);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((comments) => setComments(comments))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <Posts posts={posts} handleCommentsClick={handleCommentsClick} />
      <Comments comments={comments} />
    </div>
  );
}
