import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ comments }) => {

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
