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
  display: flex;
  flex-direction: column;
  font-family: 'Lora', serif;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1rem;
    gap: 2rem;
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
    gap: 1.5rem;
  }
`;

const SectionContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1rem;
    min-height: 80vh;
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
    min-height: 70vh;
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