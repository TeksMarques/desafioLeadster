import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Container = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
`;

const LandingPage = () => {
  return (
    <Container>
      <Title>Bem-vindo à Landing Page!</Title>
      <p>Esta é a página inicial do seu site.</p>
    </Container>
  );
};

export default LandingPage;
