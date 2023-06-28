import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const HeaderLogo = styled.div`
  margin: 30px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderMain = styled.div`
  width: 100%;
  height: 550px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f8ff;
`;

export const HeaderTextBubble = styled.h5`
  font-size: 14px;
  color: #089bfe;
  border: 2px solid #089bfe;
  border-radius: 20px 20px 20px 0;
  padding: 5px 15px;
  margin-bottom: 10px;
  font-weight: 900;
  letter-spacing: 0.3px;
`;

export const HeaderTextSubTitle = styled.h3`
  font-size: 50px;
  color: #333;
  padding-top: 8px;
  margin-bottom: 0px;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

export const HeaderTitle = styled.div`
position: relative;
width: max-content;
height: max-content;
padding: 0;
margin-top: 0;

`;

export const HeaderTextTitle = styled.h1`
font-size: 88px;
font-weight: 800;
padding-left: 15px;
padding-right: 15px;
background-image: linear-gradient(to right, #2c83fb -45%, #1f76f0 100%);
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
color: transparent;
`;

export const Line = styled.div`
width: 100%;
border: 1px solid #cbd6df;
margin-top: 10px;
margin-bottom: 15px;
`;

export const HeaderCTO = styled.h4`
font-size: 18px;
font-weight: 600;
`;
