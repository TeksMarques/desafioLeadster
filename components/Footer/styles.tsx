import styled from "styled-components";

export const FooterContainer = styled.div.attrs(() => ({
  'data-testid': 'footer-container',
}))`
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