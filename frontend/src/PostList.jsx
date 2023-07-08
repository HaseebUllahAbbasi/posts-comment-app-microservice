import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  const redneredPosts = Object.values(posts).map((post) => {
    return (
      <div className="card my-3" key={post.id}>
        <div className="card-body">
          <h4>
            Post Id: {post.id}
            &nbsp; &nbsp; Post Title: {post.title},
          </h4>
        </div>
        <div className="card-footer">
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} ></CommentCreate>

        </div>
      </div>
    );
  });
  return (
    <div className="col-md-6 offset-md-3 my-3">
      Posts
      {redneredPosts}
    </div>
  );
};
export default PostList;
