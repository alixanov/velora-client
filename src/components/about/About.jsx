import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import { Timeline, People, Checkroom } from '@mui/icons-material'; // Icons for stats
import girl1 from "../../assets/logatib.png";
import girl2 from "../../assets/logatib1.png";
import girl3 from "../../assets/logatib2.png";

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #f8bbd0 100%); /* Subtle gradient */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
  position: relative;
`;

const Title = styled(Typography)`
  font-size: 2.8rem; /* Reduced for better proportion */
  font-weight: 700;
  background: linear-gradient(45deg, #d81b60, #f06292); /* Gradient text */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  animation: fadeInSlide 1.2s ease-in-out;

  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Description = styled(Typography)`
  font-size: 1.2rem; /* Reduced for readability */
  color: #444;
  line-height: 1.9;
  max-width: 900px;
  margin: 0 auto 3rem;
  font-weight: 400;
  font-style: italic;
  animation: fadeInDelay 1.5s ease-in-out 0.3s backwards; /* Delayed animation */

  @keyframes fadeInDelay {
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

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center; /* Added for proper centering */
  gap: 2.5rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
  width: 220px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 2.2rem;
    color: #d81b60;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #666;
    font-weight: 400;
  }

  svg {
    color: #d81b60;
    font-size: 2rem;
  }
`;

const About = () => {
  const stats = [
    { icon: <Timeline />, value: '1000+', label: 'Yil davomida xizmat ko‘rsatish' },
    { icon: <People />, value: '4000+', label: 'Qoniqarli mijozlar' },
    { icon: <Checkroom />, value: '9000+', label: 'Turli liboslar' },
  ];

  return (
    <AboutSection>
      <Title variant="h2" component="h2">
        Biz haqimizda
      </Title>
      <Description variant="body1">
        Ateliyemiz 2018 yilda ochilgan bo‘lib, yuqori sifatli liboslar va professional tikuv xizmatlarini
        taqdim etishda yetakchilik qilamiz. Sizning individual uslubingizni kashf eting va biz bilan
        o‘ziga xos dizaynni jonlantiring!
      </Description>
      <ImageGallery>
        <img src={girl1} alt="Ateliye tashqi ko'rinishi" loading="lazy" />
        <img src={girl2} alt="Tikuvchi ishlayotgan holatda" loading="lazy" />
        <img src={girl3} alt="Umumiy holatda" loading="lazy" />
      </ImageGallery>
      <StatsContainer>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            {stat.icon}
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </StatItem>
        ))}
      </StatsContainer>
    </AboutSection>
  );
};

export default About;