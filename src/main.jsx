import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider, Route, createBrowserRouter } from "react-router-dom";

//páginas
import Home from "./routes/Home.jsx";
import NewPost from "./routes/NewPost.jsx";
import Post from "./routes/Post.jsx";
import Admin from "./routes/Admin.jsx";
import EditPost from "./routes/EditPost.jsx";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>Página não encontrada</div>,
      },
      {
        path: "/new",
        element: <NewPost />,
        errorElement: <div>Página não encontrada</div>,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
