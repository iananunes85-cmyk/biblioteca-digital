
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import "./App.css";
import Header from "./components/Header";
import Livro from "./components/Livro";
import Footer from "./components/Footer";

const API_URL = "http://localhost:3000";

function App() {
  const [livros, setLivros] = useState([]);
  const [conectado, setConectado] = useState(false);
  const [mensagem, setMensagem] = useState("Carregando livros...");

  useEffect(() => {
    async function carregarLivros() {
      try {
        const resposta = await fetch(`${API_URL}/livros`);

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os livros.");
        }

        const resultado = await resposta.json();
        setLivros(resultado.dados ?? resultado);
        setMensagem("");
      } catch (erro) {
        setMensagem(
          "Não foi possível carregar os livros. Verifique se a API está funcionando."
        );
      }
    }

    carregarLivros();

    const socket = io(API_URL);

    socket.on("connect", () => {
      setConectado(true);
      socket.emit("entrar-sala", "livros");
    });

    socket.on("disconnect", () => {
      setConectado(false);
    });

    socket.on("livro-criado", (livro) => {
      setLivros((atuais) => {
        if (atuais.some((item) => item.id === livro.id)) {
          return atuais;
        }

        return [...atuais, livro];
      });

      setMensagem("");
    });

    socket.on("livro-atualizado", (livro) => {
      setLivros((atuais) =>
        atuais.map((item) =>
          item.id === livro.id ? livro : item
        )
      );
    });

    socket.on("livro-excluido", ({ id }) => {
      setLivros((atuais) =>
        atuais.filter((livro) => livro.id !== id)
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <Header />

      <main className="container">
        <section className="status-conexao">
          <span>
            {conectado
              ? "🟢 Conectado em tempo real"
              : "🔴 Desconectado do servidor"}
          </span>
        </section>

        <h1>Biblioteca Digital</h1>

        {mensagem && <p role="status">{mensagem}</p>}

        {!mensagem && livros.length === 0 && (
          <p>Nenhum livro cadastrado.</p>
        )}

        <section className="lista-livros">
          {livros.map((livro) => (
            <Livro
              key={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              genero={livro.genero}
              ano={livro.ano}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
