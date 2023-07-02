import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardDetails from "../../../components/Modal";
import ResizeObserver from "../MainPage/mock-resize-observer.js";

global.ResizeObserver = ResizeObserver;

const mockCard = {
  title: "Exemplo de Título",
  description: "Exemplo de descrição",
  link: "https://example.com/video",
};

describe("CardDetails", () => {
  beforeEach(() => {
    render(<CardDetails isOpen={true} closeModal={() => {}} card={mockCard} />);
  });
  test("renderiza o componente CardDetails", () => {
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  test("exibe o título do card corretamente", () => {
    expect(screen.getByText("Exemplo de Título")).toBeInTheDocument();
  });

  test("exibe o player de vídeo corretamente", () => {
    expect(screen.getByTestId("player")).toBeInTheDocument();
    expect(screen.getByTestId("player").tagName).toBe("DIV");
    
  });

  test("exibe a descrição do card corretamente", () => {
    expect(screen.getByText("Descrição")).toBeInTheDocument();
    expect(screen.getByText("Exemplo de descrição")).toBeInTheDocument();
  });

  test("exibe os botões de download corretamente", () => {
    expect(screen.getByText("Downloads")).toBeInTheDocument();
    expect(screen.getByText("Spreadsheet.xls")).toBeInTheDocument();
    expect(screen.getByText("Document.doc")).toBeInTheDocument();
    expect(screen.getByText("Presentation.ppt")).toBeInTheDocument();
  });
  
});
