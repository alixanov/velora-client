import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import all images individually
import maxsus1 from "../../assets/maxsus_libos.jpg";
import maxsus2 from "../../assets/maxsus_libos1.jpg";
import maxsus3 from "../../assets/maxsus_libos2.jpg";
import maxsus4 from "../../assets/maxsus_libos3.jpg";
import maxsus5 from "../../assets/maxsus_libos4.jpg";
import maxsus6 from "../../assets/maxsus_libos5.jpg";
import maxsus7 from "../../assets/maxsus_libos6.jpg";
import maxsus8 from "../../assets/maxsus_libos7.jpg";
import toy1 from "../../assets/toy_uchun1.png";
import toy2 from "../../assets/toy_uchun2.png";
import toy3 from "../../assets/toy_uchun3.png";
import kundalik1 from "../../assets/kundalik21.jpg";
import kundalik2 from "../../assets/kundalik22.jpg";
import kundalik3 from "../../assets/kundalik23.jpg";
import kundalik4 from "../../assets/kundalik24.jpg";
import kundalik5 from "../../assets/kundalik25.jpg";
import kundalik6 from "../../assets/kundalik26.jpg";
import kundalik7 from "../../assets/kundalik27.jpg";
import toy4 from "../../assets/toy_uchun.png";
import toy5 from "../../assets/toy_uchun1.png";
import toy6 from "../../assets/toy_uchun2.png";
import toy7 from "../../assets/toy_uchun3.png";
import toy8 from "../../assets/toy_uchun4.png";
import toy9 from "../../assets/toy_uchun5.png";
import toy10 from "../../assets/toy_uchun6.png";
import toy11 from "../../assets/toy_uchun7.png";
import toy12 from "../../assets/toy_uchun4.png";
import toy13 from "../../assets/toy_uchun5.png";
import toy14 from "../../assets/toy_uchun6.png";
import toy15 from "../../assets/toy_uchun7.png";
import toy16 from "../../assets/toy_uchun8.png";
import toy17 from "../../assets/toy_uchun9.png";
import toy18 from "../../assets/toy_uchun10.png";
import toy19 from "../../assets/toy_uchun11.png";
import toy20 from "../../assets/toy_uchun12.png";
import toy21 from "../../assets/toy_uchun13.png";
import toy22 from "../../assets/toy_uchun14.png";
import toy23 from "../../assets/toy_uchun15.png";
import toy24 from "../../assets/toy_uchun16.png";
import kundalik8 from "../../assets/kundalik18.jpg";
import kundalik9 from "../../assets/kundalik19.jpg";
import kundalik10 from "../../assets/kundalik20.jpg";
import toy25 from "../../assets/toy_uchun8.png";
import toy26 from "../../assets/toy_uchun9.png";
import toy27 from "../../assets/toy_uchun10.png";
import toy28 from "../../assets/toy_uchun11.png";
import toy29 from "../../assets/toy_uchun12.png";
import toy30 from "../../assets/toy_uchun13.png";
import toy31 from "../../assets/toy_uchun14.png";
import toy32 from "../../assets/toy_uchun15.png";
import toy33 from "../../assets/toy_uchun16.png";
import kundalik11 from "../../assets/kundalik_uchun1.png";
import kundalik12 from "../../assets/kundalik_uchun2.png";
import kundalik13 from "../../assets/kundalik_uchun3.png";
import kundalik14 from "../../assets/kundalik_uchun4.png";
import kundalik15 from "../../assets/kundalik_uchun5.png";
import kundalik16 from "../../assets/kundalik_uchun6.png";
import kundalik17 from "../../assets/kundalik_uchun7.png";
import kundalik18 from "../../assets/kundalik_uchun8.png";
import kundalik19 from "../../assets/kundalik_uchun9.png";
import kundalik20 from "../../assets/kundalik_uchun10.png";
import toy34 from "../../assets/toy_uchun1.png";
import toy35 from "../../assets/toy_uchun2.png";
import toy36 from "../../assets/toy_uchun3.png";
import toy37 from "../../assets/toy_uchun4.png";
import toy38 from "../../assets/toy_uchun.png";

const GallerySection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #f8bbd0 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
`;

const Title = styled(Typography)`
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #d81b60, #f06292);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2.5rem;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const GalleryWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
  position: relative;
`;

const SwiperContainer = styled(Swiper)`
  padding: 1rem 0;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #d81b60;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    &:hover {
      background-color: #fff;
    }
  }
`;

const GalleryItem = styled.div`
  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Gallery = () => {
  // Categorize images into arrays
  const kundalikImages = [
    kundalik1, kundalik2, kundalik3, kundalik4, kundalik5, kundalik6, kundalik7,
    kundalik8, kundalik9, kundalik10, kundalik11, kundalik12, kundalik13, kundalik14,
    kundalik15, kundalik16, kundalik17, kundalik18, kundalik19, kundalik20,
  ];

  const toyImages = [
    toy1, toy2, toy3, toy4, toy5, toy6, toy7, toy8, toy9, toy10,
    toy11, toy12, toy13, toy14, toy15, toy16, toy17, toy18, toy19, toy20,
    toy21, toy22, toy23, toy24, toy25, toy26, toy27, toy28, toy29, toy30,
    toy31, toy32, toy33, toy34, toy35, toy36, toy37, toy38,
  ];

  const maxsusImages = [
    maxsus1, maxsus2, maxsus3, maxsus4, maxsus5, maxsus6, maxsus7, maxsus8,
  ];

  return (
    <GallerySection id="gallery">
      <Title variant="h2" component="h2">
        Mijozlarimiz liboslarda
      </Title>

      {/* Kundalik Section */}
      <Box mb={4}>
        <Typography variant="h5" sx={{ color: '#d81b60', mb: 2, fontFamily: 'Lora, serif' }}>
          Kundalik kiyimlar
        </Typography>
        <GalleryWrapper>
          <SwiperContainer
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            loop={true} // Enable infinite looping
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {kundalikImages.map((src, index) => (
              <SwiperSlide key={index}>
                <GalleryItem>
                  <img src={src} alt={`Kundalik kiyim ${index + 1}`} loading="lazy" />
                </GalleryItem>
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </GalleryWrapper>
      </Box>

      {/* To'y Section */}
      <Box mb={4}>
        <Typography variant="h5" sx={{ color: '#d81b60', mb: 2, fontFamily: 'Lora, serif' }}>
          Bayram va to‘y liboslari
        </Typography>
        <GalleryWrapper>
          <SwiperContainer
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            loop={true} // Enable infinite looping
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {toyImages.map((src, index) => (
              <SwiperSlide key={index}>
                <GalleryItem>
                  <img src={src} alt={`To'y libosi ${index + 1}`} loading="lazy" />
                </GalleryItem>
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </GalleryWrapper>
      </Box>

      {/* Maxsus Dizayn Section */}
      <Box>
        <Typography variant="h5" sx={{ color: '#d81b60', mb: 2, fontFamily: 'Lora, serif' }}>
          Maxsus dizayn liboslar
        </Typography>
        <GalleryWrapper>
          <SwiperContainer
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            loop={true} // Enable infinite looping
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {maxsusImages.map((src, index) => (
              <SwiperSlide key={index}>
                <GalleryItem>
                  <img src={src} alt={`Maxsus dizayn ${index + 1}`} loading="lazy" />
                </GalleryItem>
              </SwiperSlide>
            ))}
          </SwiperContainer>
        </GalleryWrapper>
      </Box>
    </GallerySection>
  );
};

export default Gallery;