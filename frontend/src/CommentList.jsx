import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";

const CommentList = ({comments}) => {
  
  console.log(comments)
  const redneredComments = comments.map((comment) => {
    let content;
    
    if(comment.status=== "approved")
    {
      content = comment.content;
    }
    else if(comment.status=== "pedning")
    {
      content = "pending comment";
    }
    else if(comment.status=== "rejected")
    {
      content = "rejected comment";
    }
    

    return (
      <li className=" my-1" key={comment.id}>

        {content}
     
      </li>
    );
  });
  return (
    <div className="col-md-6 offset-md-3 my-3">
      comments : 
      {redneredComments}
    </div>
  );
};
export default CommentList;
