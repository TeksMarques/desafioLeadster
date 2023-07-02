import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "../../pages/index";

describe("LandingPage", () => {
  test("renderiza o componente LandingPage", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("landing-page-container")).toBeInTheDocument();
  });

  test("exibe o Header corretamente", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("header-container")).toBeInTheDocument();
  });

  test("exibe o NavBar corretamente", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("nav-bar-container")).toBeInTheDocument();
  });

  test("exibe os cards corretamente", () => {
    render(<LandingPage />);
    const cards = screen.getAllByTestId("card-container");

    expect(cards.length).toBeGreaterThan(0);
  });

  test("exibe o SectionInfos corretamente", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("section-infos-container")).toBeInTheDocument();
  });

  test("exibe o Footer corretamente", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("footer-container")).toBeInTheDocument();
  });
});
