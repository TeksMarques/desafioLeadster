import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { NavBar } from '../components/NavBar';

const LandingPage = () => {
    return (
        <PageContainer>            
            <Header />
            <NavBar />  
        </PageContainer>
      )
    
}; 

export default LandingPage;

export const PageContainer = styled.div`
    widht: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`


