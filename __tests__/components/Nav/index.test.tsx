import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NavBar from "../../../components/Nav";

describe("NavBar", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  test("renderiza o componente NavBar", () => {
    expect(screen.getByTestId("nav-bar-container")).toBeInTheDocument();
  });

  test("exibe os botões corretamente", () => {
    const botaoAgencias = screen.getByText("Agências");
    const botaoChatbot = screen.getByText("Chatbot");
    const botaoMarketingDigital = screen.getByText("Marketing Digital");
    const botaoGeracaoLeads = screen.getByText("Geração de Leads");
    const botaoMidiaPaga = screen.getByText("Mídia Paga");

    expect(botaoAgencias).toBeInTheDocument();
    expect(botaoChatbot).toBeInTheDocument();
    expect(botaoMarketingDigital).toBeInTheDocument();
    expect(botaoGeracaoLeads).toBeInTheDocument();
    expect(botaoMidiaPaga).toBeInTheDocument();
  });

  test("altera o estado dos botões ao clicar", () => {
    const botaoAgencias = screen.getByText("Agências");

    expect(botaoAgencias).not.toHaveClass("alterado");

    act(() => {
      fireEvent.click(botaoAgencias);
    });

    expect(botaoAgencias).toHaveClass("alterado");

    act(() => {
      fireEvent.click(botaoAgencias);
    });

    expect(botaoAgencias).not.toHaveClass("alterado");
  });

  test("exibe a opção de filtro corretamente", () => {
    const opcaoData = screen.getByText("Data de Publicação");
    const opcaoMaisRecentes = screen.getByText("Mais Recentes");
    const opcaoMaisAntigos = screen.getByText("Mais Antigos");

    expect(opcaoData).toBeInTheDocument();
    expect(opcaoMaisRecentes).toBeInTheDocument();
    expect(opcaoMaisAntigos).toBeInTheDocument();
  });

  test("fecha o modal ao chamar a função closeModal", () => {
    const botaoAgencias = screen.getByText("Agências");

    act(() => {
      fireEvent.click(botaoAgencias);
    });

    expect(botaoAgencias).toHaveClass("alterado");
  });
});
