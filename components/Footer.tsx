import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

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
            <Link className="footer__redes" href="https://www.linkedin.com/company/leadster-platform/" target="blank">
                <ImLinkedin2 />
            </Link>
            <Link className="footer__redes" href="https://www.facebook.com/leadsterplatform" target="blank">
                <ImFacebook />
            </Link>
            <Link className="footer__redes" href="https://www.instagram.com/leadster.com.br/" target="blank">
                <BsInstagram />
            </Link>                        
          </FooterSociais>
          <FooterContatos>
                <TextContato className="footer__links">
                    <span className="header__bold">Email: </span>
                    contato@leadster.com.br
                </TextContato>
                <TextContato className="footer__links">
                    <span className="header__bold">Telefone: </span>
                    (42) 98828-9851
                </TextContato>
          </FooterContatos>
        </FooterInfo>
      </FooterMain>
      <Line></Line>
      <FooterCopy>
        <Paragraph>Copyright © 2015 - 2022 Todos os direitos reservados |{"   "}
          <a
            className="footer__copy"
            href="https://www.leadster.com.br"
            target="_blank"
          >
            Leadster{"   "}
          </a>
        </Paragraph>
        <Paragraph> Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos
          de uso |</Paragraph>
      </FooterCopy>  
    </FooterContainer>
  );
};



export default Footer;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

export const Paragraph = styled.p`
  font-size: 11px;
  font-weight: medium;
  text-align: center;
  color: grey;
  margin-top: 4px;
`;

export const FooterMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  gap: 6px;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
`;
export const TitleContainer = styled.div`
  margin-bottom: 8px;
`;

export const TitleText = styled.h3`
  font-size: 18px;
  font-weight: 700;
  text-align: flex-start;
  margin-bottom: 15px;
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
`;
export const FooterSociais = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 2px;
  padding-bottom: 15px;
`;

export const FooterContatos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
export const TextContato = styled.p`
    font-size: 12px;
    padding-bottom: 15px;
`
export const Line = styled.hr`
  width: 100%;
  height: 1px;
  margin-top: 10px;  
  margin-bottom: 8px;
`;

export const FooterCopy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 75%;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 6px;
`
