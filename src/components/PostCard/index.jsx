import React from "react";
import './styles.css'

function PostCard({ title, cover, body, id }) {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content" key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default PostCard;
