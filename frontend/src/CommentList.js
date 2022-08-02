import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:5001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    return (
      <li
        className="w-100"
        style={{ width: "30%", marginBottom: "20px" }}
        key={comment.id}
      >
        <div className="">
          <h3>{comment.content}</h3>
        </div>
      </li>
    );
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
