import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../axios/config";
import "./Home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="home">
      <h1 className="home-title">
        Seja bem-vindo ao melhor blog de notícias sobre onibus e busologia.
      </h1>
      <h2>Últimas notícias</h2>
      {posts.length === 0 ? (
        <p>Carregando posts...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
      ;
    </div>
  );
};

export default Home;
