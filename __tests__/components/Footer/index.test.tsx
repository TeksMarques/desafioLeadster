import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../../components/Footer";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  test("renderiza o componente Footer", () => {
    // Verifica se o componente está sendo renderizado corretamente
    expect(screen.getByTestId("footer-container")).toBeInTheDocument();
  });

  test("renderiza o logo", () => {
    // Verifica se o logo está sendo renderizado corretamente
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  test("renderiza os links principais", () => {
    // Verifica se os links principais estão sendo renderizados corretamente
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Ferramentas")).toBeInTheDocument();
    expect(screen.getByText("Preços")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  test("renderiza os cases", () => {
    // Verifica se os cases estão sendo renderizados corretamente
    expect(screen.getByText("Geração de Leads B2B")).toBeInTheDocument();
    expect(
      screen.getByText("Geração de Leads em Software")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Geração de Leads em Imobiliária")
    ).toBeInTheDocument();
    expect(screen.getByText("Cases de Sucesso")).toBeInTheDocument();
  });

  test("renderiza os materiais", () => {
    // Verifica se os materiais estão sendo renderizados corretamente
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Parcerias com Agências")).toBeInTheDocument();
    expect(screen.getByText("Guia Definito do Marketing")).toBeInTheDocument();
    expect(screen.getByText("Materiais Gratuitos")).toBeInTheDocument();
  });

  test("renderiza os links das redes sociais", () => {
    // Verifica se os links das redes sociais estão sendo renderizados corretamente
    expect(screen.getByTestId("linkedin-link")).toBeInTheDocument();
    expect(screen.getByTestId("facebook-link")).toBeInTheDocument();
    expect(screen.getByTestId("instagram-link")).toBeInTheDocument();
  });

  test("renderiza as informações de contato", () => {
    // Verifica se as informações de contato estão sendo renderizadas corretamente
    expect(screen.getByText("contato@leadster.com.br")).toBeInTheDocument();
    expect(screen.getByText("(42) 98828-9851")).toBeInTheDocument();
  });

  test("renderiza o texto de direitos autorais", () => {
    // Verifica se o texto de direitos autorais está sendo renderizado corretamente
    expect(
      screen.getByText("Copyright © 2015 - 2022 Todos os direitos reservados |")
    ).toBeInTheDocument();
  });
});
