import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMain,
  HeaderTextBubble,
  HeaderTextSubTitle,
  HeaderTitle,
  HeaderTextTitle,
  Line,
  HeaderCTO,
} from "./styles";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Image src="/images/logo.png" alt="logo" width={194} height={42} />
      </HeaderLogo>
      <HeaderMain>
        <HeaderTextBubble>WEBINARS EXCLUSIVOS</HeaderTextBubble>
        <HeaderTextSubTitle>Menos Conversinha,</HeaderTextSubTitle>
        <HeaderTitle>
          <HeaderTextTitle>Mais Conversão</HeaderTextTitle>
          <Image
            src="/images/asset-header.png"
            alt="logo"
            width={32}
            height={49}
            className="header__asset"
          />
          <Line />
        </HeaderTitle>
        <HeaderCTO>
          {" "}
          Conheça as estratégias que{" "}
          <span className="header__bold">mudaram o jogo </span> e como
          aplicá-las no seu negócio
        </HeaderCTO>
      </HeaderMain>
    </HeaderContainer>
  );
};

export default Header;
