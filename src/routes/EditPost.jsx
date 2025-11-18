import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewPost.css";

const EditPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();
  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      const data = response.data;
      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  const editPost = async (e) => {
    e.preventDefault();
    try {
      await blogFetch.put(`/posts/${id}`, {
        title,
        body,
      });
      navigate("/");
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  return (
    <div className="new-post">
      <h2>Editando {title}</h2>
      <form onSubmit={editPost}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o Título"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label htmlFor="body">Conteúdo do post:</label>
          <textarea
            type="text"
            name="body"
            placeholder="Digite o conteudo do post"
            id="body"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </div>
        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
