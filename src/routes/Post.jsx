import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      setPost(response.data);
      console.log(id);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
