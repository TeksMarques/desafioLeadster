import styled from "styled-components";

export const SectionInfosContainer = styled.div.attrs({
  "data-testid": "section-infos-container",
})`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f0f8ff;
  position: relative;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const SectionInfosWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const SectionInfosText = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;

  @media screen and (max-width: 480px) {
    padding-top: 1rem;
  }
`;

export const Text = styled.h1`
  font-weight: 500;
`;
export const SubText = styled.h1`
  font-weight: 900;
`;
export const Paragraph = styled.p.attrs({
  "data-testid": "section-infos-paragraph",
})`
  font-weight: 400;
`;
export const Line = styled.hr`
  width: 65%;
  border: 1px solid #cbd6df;
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const InfosRD = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ButtonSection = styled.button`
  background-color: #2c83fb;
  color: white;
  border: 1px solid #2c83fb;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 500;
`;

export const InfosNota = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 1rem;
`;

export const Attencion = styled.p`
  font-size: 0.8rem;
  margin-left: 0.5rem;
  font-weight: 700;
  font-family: sans-serif;
`;
