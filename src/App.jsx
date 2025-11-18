import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <footer className="footer">
        <p>
          © 2025, Bruno de Oliveira. <br></br>Projeto de cunho acadêmico, feito
          durante o curso Formação Front-End - Hora de Codar. <br></br> Meu
          Portfólio:{" "}
          <a
            href="https://github.com/BrunoDeOliveira-0898"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
