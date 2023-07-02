import React from "react";
import { render, screen } from "@testing-library/react";
import SectionInfos from "../../../components/Section/";

describe("SectionInfos", () => {
  beforeEach(() => {
    render(<SectionInfos />);
  });
  test("renderiza o componente SectionInfos", () => {
    expect(screen.getByTestId("section-infos-container")).toBeInTheDocument();
  });

  test("exibe o texto corretamente", () => {
    const textoProntoParaTriplicar = screen.getByText(
      "Pronto para triplicar sua"
    );
    const subtextoGeracaoLeads = screen.getByText("Geração de Leads?");
    const paragrafoCriacaoAtivacao = screen.getByTestId(
      "section-infos-paragraph"
    );

    expect(textoProntoParaTriplicar).toBeInTheDocument();
    expect(subtextoGeracaoLeads).toBeInTheDocument();
    expect(paragrafoCriacaoAtivacao).toBeInTheDocument();
  });

  test("exibe o botão corretamente", () => {
    const botaoVerDemonstracao = screen.getByText("VER DEMONSTRAÇÃO");

    expect(botaoVerDemonstracao).toBeInTheDocument();
  });

  test("exibe a imagem corretamente", () => {
    const imagemComparativosCTA = screen.getByAltText("comparativos CTA");

    expect(imagemComparativosCTA).toBeInTheDocument();
  });
});
