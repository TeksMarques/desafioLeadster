import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header__logo">
        <Image src="/images/logo.png" alt="logo" width={194} height={42} />
      </div>
      <HeaderTitle>
        <h5 className="header__text__bubble">WEBINARS EXCLUSIVOS</h5>
        <h3 className="header__text_subtitle">Menos Conversinha,</h3>
        <div className="header__title">
            <h1 className="header__text__title">Mais Conversão</h1>
            <Image src="/images/asset-header.png" alt="logo" width={32} height={49} className="header__asset" />
            <div className="header__line" />
        </div>
        <h4 className="header__cto"> Conheça as estratégias que <span className="header__bold">mudaram o jogo </span> e como aplicá-las no seu negócio</h4>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;  
  flex-direction: column;
`;

export const HeaderTitle = styled.div`
    width: 100%;
    height: 550px;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f8ff;
`;
