import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

import Main from '../components/main/Main';
import Fashion from '../components/fashion/Fashion';

const AppRoutes = () => {
  return (
    <main>
      <Navbar />
      <section className="content">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/services/:serviceId" element={<Fashion />} />

        </Routes>
      </section>
    </main>
  );
};

export default AppRoutes;