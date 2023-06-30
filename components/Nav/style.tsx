import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100vw;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.div`
  width: 70%;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
`;

export const NavWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled.button`
  background-color: #fff;
  color: #333;

  &.alterado {
    background-color: #2c83fb;
    color: white;
    border: 1px solid #2c83fb;

    &:hover {
      background-color: #2c83fb;
      color: white;
    }
  }
`;

export const NavFilter = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonFilter = styled.select`
  border-radius: 8px;
  padding: 5px 10px;
  right: 5px;
`;

export const Line = styled.hr`
  width: 80%;
  border: 1px solid #cbd6df;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;