import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Main from '../components/main/Main';
import Fashion from '../components/fashion/Fashion';
import Auth from '../components/auth/Auth';
import Cabinet from '../components/cabinet/Cabinet';
import Footer from '../components/footer/Footer';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <main>
      {location.pathname !== '/auth' && <Navbar />}
      <section className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/services/:serviceId" element={<Fashion />} />
        </Routes>
        {location.pathname !== '/auth' && <Footer />}
      </section>
    </main>
  );
};

export default AppRoutes;