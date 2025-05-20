import React from 'react';
import styled from 'styled-components';
import About from '../about/About';
import Services from '../services/Services';
import Reviews from '../reviews/Reviews';
import Gallery from '../cloth/Cloth';
import Work from '../work/Work';
import FAQ from '../faq/Faq';
import Order from '../order/Order';

const MainContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: 'Lora', serif;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const SectionContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    min-height: 70vh;
  }

  @media (max-width: 600px) {
    min-height: 60vh;
  }

  @media (max-width: 400px) {
    min-height: 50vh;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <SectionContainer id="bosh-sahifa">
        <About />
      </SectionContainer>
      <SectionContainer id="services">
        <Services />
      </SectionContainer>
      <SectionContainer id="reviews">
        <Reviews />
      </SectionContainer>
      <SectionContainer id="gallery">
        <Gallery />
      </SectionContainer>
      <SectionContainer id="work">
        <Work />
      </SectionContainer>
      <SectionContainer id="faq">
        <FAQ />
      </SectionContainer>
      <SectionContainer id="order">
        <Order />
      </SectionContainer>
    </MainContainer>
  );
};

export default Main;