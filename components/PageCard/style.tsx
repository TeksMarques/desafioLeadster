import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const PageText = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const PageNumber = styled.button`
  color: #333;
  font-weight: bold;
  margin-left: 1rem;
  border: none;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  background-color: transparent;

  &.active {
    border: 1px solid #0183ff;
    padding: 2px 10px;
    color: #0183ff;
    border-radius: 5px;
  }
`;
