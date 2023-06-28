import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/index';
import { NavBar } from '../components/Nav/index';
import SectionInfos from '../components/Section/index';
import Footer from '../components/Footer/index';

const LandingPage = () => {
    return (
        <PageContainer>            
            <Header />
            <NavBar />
            <SectionInfos /> 
            <Footer />
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


