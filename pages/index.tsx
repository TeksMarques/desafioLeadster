"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header/index";
import NavBar from "../components/Nav/index";
import SectionInfos from "../components/Section/index";
import Footer from "../components/Footer/index";
import Card from "../components/MainPage/index";
import cardMock from "../public/card.json";
import PageCard from "../components/PageCard";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 9;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToDisplay = data.slice(startIndex, endIndex);

  useEffect(() => {
    setData(cardMock);
  }, []);

  return (
    <PageContainer>
      <Header />
      <NavBar />
      <div className="cards__container">
        {cardsToDisplay.map((card, index) => (
          <Card card={card} key={`card-${index}`} />
        ))}
      </div>
      <Line></Line>
      <PageCard
        cardsPerPage={cardsPerPage}
        totalCards={data.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <SectionInfos />
      <Footer />
    </PageContainer>
  );
};

export default LandingPage;

export const PageContainer = styled.div.attrs({
  "data-testid": "landing-page-container",
  })`
  widht: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    padding: 0 10px; /* Reduza as margens laterais em dispositivos menores */
  }
`;

export const Line = styled.hr`
  width: 80%;
  border: 1px solid #cbd6df;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
