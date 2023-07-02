import React from "react";
import Image from "next/image";

import Link from "next/link";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import {
  FooterContainer,
  FooterContatos,
  FooterCopy,
  FooterHeader,
  FooterInfo,
  FooterLinks,
  FooterMain,
  FooterSociais,
  Line,
  Paragraph,
  TextContato,
  TitleContainer,
  TitleText,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <Image
          className="footer__logo"
          src="/images/logo.png"
          alt="logo"
          width={194}
          height={42}
        />
        <Paragraph>Transformando visitantes em clientes.</Paragraph>
      </FooterHeader>
      <FooterMain>
        <FooterInfo>
          <TitleContainer>
            <TitleText>Links Principais</TitleText>
          </TitleContainer>
          <FooterLinks>
            <Link className="footer__links" href="/">
              Home
            </Link>
            <Link className="footer__links" href="/">
              Ferramentas
            </Link>
            <Link className="footer__links" href="/">
              Preços
            </Link>
            <Link className="footer__links" href="/">
              Contato
            </Link>
          </FooterLinks>
        </FooterInfo>
        <FooterInfo>
          <TitleContainer>
            <TitleText>Cases</TitleText>
            <FooterLinks>
              <Link className="footer__links" href="/">
                Geração de Leads B2B
              </Link>
              <Link className="footer__links" href="/">
                Geração de Leads em Software
              </Link>
              <Link className="footer__links" href="/">
                Geração de Leads em Imobiliária
              </Link>
              <Link className="footer__links" href="/">
                Cases de Sucesso
              </Link>
            </FooterLinks>
          </TitleContainer>
        </FooterInfo>
        <FooterInfo>
          <TitleContainer>
            <TitleText>Materiais</TitleText>
          </TitleContainer>
          <FooterLinks>
            <Link className="footer__links" href="/">
              Blog
            </Link>
            <Link className="footer__links" href="/">
              Parcerias com Agências
            </Link>
            <Link className="footer__links" href="/">
              Guia Definito do Marketing
            </Link>
            <Link className="footer__links" href="/">
              Materiais Gratuitos
            </Link>
          </FooterLinks>
        </FooterInfo>
        <FooterInfo>
          <TitleContainer>
            <TitleText>Siga a Leadster</TitleText>
          </TitleContainer>
          <FooterSociais>
            <Link
              className="footer__redes"
              href="https://www.linkedin.com/company/leadster-platform/"
              target="blank"
              data-testid="linkedin-link"
            >
              <ImLinkedin2 />
            </Link>
            <Link
              className="footer__redes"
              href="https://www.facebook.com/leadsterplatform"
              target="blank"
              data-testid="facebook-link"
            >
              <ImFacebook />
            </Link>
            <Link
              className="footer__redes"
              href="https://www.instagram.com/leadster.com.br/"
              target="blank"
              data-testid="instagram-link"
            >
              <BsInstagram />
            </Link>
          </FooterSociais>
          <FooterContatos>
            <TextContato className="footer__links" id="email-info">
              <span className="header__bold">Email: </span>
              contato@leadster.com.br
            </TextContato>
            <TextContato className="footer__links" id="telefone-info">
              <span className="header__bold">Telefone: </span>
              (42) 98828-9851
            </TextContato>
          </FooterContatos>
        </FooterInfo>
      </FooterMain>
      <Line></Line>
      <FooterCopy>
        <Paragraph>
          Copyright © 2015 - 2022 Todos os direitos reservados |{"   "}
          <a
            className="footer__copy"
            href="https://www.leadster.com.br"
            target="_blank"
          >
            Leadster{"   "}
          </a>
        </Paragraph>
        <Paragraph>
          {" "}
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso |
        </Paragraph>
      </FooterCopy>
    </FooterContainer>
  );
};

export default Footer;
