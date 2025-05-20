import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import Main from '../components/main/Main';
import Fashion from '../components/fashion/Fashion';
import Auth from '../components/auth/Auth';
import Cabinet from '../components/cabinet/Cabinet';
import Footer from '../components/footer/Footer';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Lora', serif;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const ContentSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const AppRoutes = () => {
  const location = useLocation();

  // Reset scroll position on route change, but skip for /cabinet
  useEffect(() => {
    if (location.pathname !== '/cabinet') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <MainContainer>
      {location.pathname !== '/auth' && <Navbar />}
      <ContentSection className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/services/:serviceId" element={<Fashion />} />
        </Routes>
        {location.pathname !== '/auth' && <Footer />}
      </ContentSection>
    </MainContainer>
  );
};

export default AppRoutes;