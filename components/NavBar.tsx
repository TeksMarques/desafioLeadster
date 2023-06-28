import React, { useState } from "react";
import styled, { css } from "styled-components";

export const NavBar = () => {
  const [botoes, setBotoes] = useState([
    { id: 1, isAlterado: false, text: "Agências" },
    { id: 2, isAlterado: false, text: "Chatbot" },
    { id: 3, isAlterado: false, text: "Marketing Digital" },
    { id: 4, isAlterado: false, text: "Geração de Leads" },
    { id: 5, isAlterado: false, text: "Mídia Paga" },
  ]);

  const handleClick = (id) => {
    setBotoes((prevState) =>
      prevState.map((botao) =>
        botao.id === id ? { ...botao, isAlterado: !botao.isAlterado } : botao
      )
    );
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

export const NavBarContainer = styled.div`
  width: 90%;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
`;

export const NavWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled.button`
  background-color: #fff;
  color: #333;

  &.alterado {
    background-color: #2c83fb;
    color: white;
    border: 1px solid #2c83fb;

    &:hover {
      background-color: #2c83fb;
      color: white;
    }
  }
`;

export const NavFilter = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonFilter = styled.select`
  border-radius: 8px;
  padding: 5px 10px;
  right: 5px;
`;

export const Line = styled.hr`
  width: 65%;
  border: 1px solid #cbd6df;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
