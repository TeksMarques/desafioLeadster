import React, { useState } from "react";
import { ButtonFilter, Line, NavBarContainer, NavButton, NavContainer, NavFilter, NavWrapper } from "./style";


const NavBar = () => {
  const [botoes, setBotoes] = useState([
    { id: 1, isAlterado: false, text: "Agências" },
    { id: 2, isAlterado: false, text: "Chatbot" },
    { id: 3, isAlterado: false, text: "Marketing Digital" },
    { id: 4, isAlterado: false, text: "Geração de Leads" },
    { id: 5, isAlterado: false, text: "Mídia Paga" },
  ]);

  const [idClicado, setIdClicado] = useState(null);

  const handleClick = (id: number) => {
    setBotoes((prevState) =>
    prevState.map((botao) => {
      if (botao.id === id) {
        return { ...botao, isAlterado: !botao.isAlterado };
      } else if (botao.id === idClicado && botao.isAlterado) {
        return { ...botao, isAlterado: false };
      }
      return botao;
    })
  );

  setIdClicado(id);
  };

  return (
    <NavBarContainer>
      <NavWrapper>
        <NavContainer>
          {botoes.map((botao) => (
            <NavButton
              key={botao.id}
              onClick={() => handleClick(botao.id)}
              className={`nav__link ${botao.isAlterado ? "alterado" : ""}`}
            >
              {botao.text}
            </NavButton>
          ))}
        </NavContainer>
        <NavFilter>
          <span className="nav__bold">Ordenar por</span>
          <ButtonFilter>
            <option value="0">Data de Publicação</option>
            <option value="1">Mais Recentes</option>
            <option value="2">Mais Antigos</option>
          </ButtonFilter>
        </NavFilter>
      </NavWrapper>
      <Line></Line>
    </NavBarContainer>
  );
};

export default NavBar;