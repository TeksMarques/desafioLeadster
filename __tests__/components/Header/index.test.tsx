import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../../components/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("renderiza o componente Header", () => {
    expect(screen.getByTestId("header-container")).toBeInTheDocument();
  });

  test("renderiza o logo", () => {
    expect(screen.getByTestId("header-logo")).toBeInTheDocument();
  });

  test("renderiza o texto 'WEBINARS EXCLUSIVOS'", () => {
    expect(screen.getByText("WEBINARS EXCLUSIVOS")).toBeInTheDocument();
  });

  test("renderiza o subtítulo", () => {
    expect(screen.getByText("Menos Conversinha,")).toBeInTheDocument();
  });

  test("renderiza o título", () => {
    expect(screen.getByText("Mais Conversão")).toBeInTheDocument();
  });

  test("renderiza a imagem do asset", () => {
    expect(screen.getByAltText("asset-header")).toBeInTheDocument();
  });

  test("renderiza o CTA", () => {
    expect(screen.getByTestId("header-cto")).toBeInTheDocument();
  });
});


