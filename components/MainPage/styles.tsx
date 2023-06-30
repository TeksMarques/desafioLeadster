import styled from "styled-components";

export const OverlayBg = styled.div`
  position: absolute;  
  display: none;
  z-index: 1;  
  height: 100%;
  width: 100%;
  background-color: rgba(1, 131, 255, 0.5);  
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 12px 12px 1px 1px rgba(0, 0, 0, 0.04);  
  transition: box-shadow 0.2s;
  border-radius: 1rem;;
  margin-bottom: 3rem;
  margin-right: 2rem;  

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:hover .overlay__bg {
    display: block;    
  }
  
} 
`;

export const CardImage = styled.div`
  width: 100%;
  height: 190px;

  position: relative;
  border-radius: 1rem;
`;

export const CardText = styled.div`
  height: 100px;
  width: 400px;
  position: relative;
  border-radius: 0.5rem;
`;

export const Text = styled.h2`
  color: #333;
  font-weight: bold;
  padding: 1rem 1.5rem 1rem 1.5rem;
`;
