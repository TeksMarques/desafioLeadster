import ResizeObserver from "./mock-resize-observer.js";

global.ResizeObserver = ResizeObserver;

import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Card from "../../../components/MainPage";

const mockCard = {
  title: "Exemplo de Título",
  description: "Exemplo de descrição",
  thumbnail: "/path/to/thumbnail.jpg",
  link: "/path/to/video",
};

describe("Card", () => {
  beforeEach(() => {
    render(<Card card={mockCard} />);
  });
  test("renderiza o componente Card", () => {
    expect(screen.getByTestId("card-container")).toBeInTheDocument();
  });

  test("renderiza o título do card", () => {
    expect(screen.getByText("Exemplo de Título")).toBeInTheDocument();
  });

  test("exibe o modal ao clicar no card", () => {
    act(() => {
        fireEvent.click(screen.getByTestId("card-container"));
      });
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  test("fecha o modal ao chamar a função closeModal", () => {
    act(() => {
        fireEvent.click(screen.getByTestId("card-container"));
      });
    expect(screen.getByTestId("modal")).toBeInTheDocument();

    act(() => {
        fireEvent.click(screen.getByTestId("close-modal"));
      });
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
});
