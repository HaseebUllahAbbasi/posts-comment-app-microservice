import axios from "axios";
import { useState } from "react";
const CommentCreate = ({postId}) => {
  const [content, setContent] = useState("");
  return (
    <form
      onSubmit={ async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        });
        setContent('');
      }}
    >
      <div className="col-md-6 offset-md-3">
        <label>New Comment</label>
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="form-control"
        />
        <button type="submit" className="btn btn-success my-1"> Add Comment</button>
      </div>
    </form>
  );
};
export default CommentCreate;
