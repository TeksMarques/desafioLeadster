import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LandingPage from "../../pages/index";

describe("LandingPage", () => {
  beforeEach(() => {
    render(<LandingPage />);
  });
  test("renderiza o componente Header", () => {
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  test("renderiza o componente NavBar", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  test("renderiza os componentes Card", () => {
    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBeGreaterThan(0);
  });

  test("atualiza o estado currentPage ao clicar na PageCard", () => {
    const currentPage = screen.getByTestId("current-page") as HTMLElement;

    expect(currentPage.textContent).toBe("1");

    const nextPageButton = screen.getByTestId("next-page-button");
    userEvent.click(nextPageButton);

    expect(currentPage.textContent).toBe("2");
  });
});
