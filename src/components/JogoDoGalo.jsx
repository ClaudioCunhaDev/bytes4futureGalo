import React, { useState } from "react";
import { adicionarJogada } from "./Logica";

export const JogoDoGalo = (props) => {
  const jogoVazio = {
    tabuleiro: [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    jogadorAtual: "X",
  };

  const [jogo, setJogo] = useState(jogoVazio);

  const handleClickReset = () => {
    setJogo(jogoVazio);
  };

  const handleJogada = (linha, column) => {
    if (jogo.tabuleiro[linha][column] === " ") {
      const novaJogada = adicionarJogada(
        jogo,
        jogo.jogadorAtual,
        linha,
        column
      );
      setJogo(novaJogada);
    }
  };

  return (
    <div>
      {jogo.tabuleiro.map((linha, i) => (
        <div
          style={{
            display: "flex",
          }}
        >
          {linha.map((column, j) => (
            <div
              style={{
                border: "2px solid black",
                height: "100px",
                width: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "50px",
                cursor: "pointer",
              }}
              onClick={() => handleJogada(i, j)}
            >
              {column}
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleClickReset}>reset</button>
    </div>
  );
};
