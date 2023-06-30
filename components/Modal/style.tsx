import styled from "styled-components";

export const ModalBG = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CardDetailsContainer = styled.div`
  position: fixed;
  inset: 0px;
  overflowY: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonModal = styled.button`  
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 10;  
  padding: 8px;  
  background-color: transparent;
  border: none; 
`;

export const CardDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  gap: 1rem;  
`;

export const CardDetailsTitle = styled.h2`
  color: #333;
  font-size: 1.1rem;
  font-weight: 650;
  width: 60%;
  overflow: hidden;
  align-self: center;
  min-height: 70px;
  line-height: 1.5rem;
`;

export const CardDetailsTitleSpan = styled.span`
  color: #089bfe;
`;

export const Player = styled.div`
  height: 300px;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const CardDetailsDescription = styled.div``;

export const Line = styled.div`  
  height: 1px;
  background-color: #ccc;  
  max-width: full;
  margin: 2px 20px;
  
`;

export const TextDescription = styled.h4`
  text-align: left;
  color: #000;
  font-size: 0.9rem;
  font-weight: 650;
  padding-left: 1.5rem;
`;

export const CardDetailsDescriptionP = styled.p`
  font-size: 0.8rem;
  text-align: left;
  padding: 0.4rem 1.5rem;
`;

export const CardDetailsDownloads = styled.div`  
  height: 100%;
`;

export const DownloadsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  width: 300px;
  padding-left: 1.5rem;
  border-radius: 5px;
`;

export const SubtitleDownloads = styled.h4`
  font-size: 0.8rem;
  padding-right: 0;
`;
