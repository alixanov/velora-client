import React from 'react'
import About from '../about/About'
import Services from '../services/Services'
import Reviews from '../reviews/Reviews'
import Gallery from '../cloth/Cloth'
import Work from '../work/Work'
import FAQ from '../faq/Faq'
import Order from '../order/Order'
import Footer from '../footer/Footer'
const Main = () => {
  return (
    <div>
      <div id="bosh-sahifa">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="order">
        <Order />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Main;