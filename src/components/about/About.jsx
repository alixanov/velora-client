import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import { Timeline, People, Checkroom } from '@mui/icons-material';
import girl1 from "../../assets/logatib.png";
import girl2 from "../../assets/logatib1.png";
import girl3 from "../../assets/logatib2.png";

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #fce4ec 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
    min-height: 80vh;
  }

  @media (max-width: 400px) {
    padding: 2rem 0.5rem;
  }
`;

const Title = styled(Typography)`
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #d81b60, #f06292);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  animation: fadeInSlide 1s ease-in-out;

  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`;

const Description = styled.div`
  font-size: 1.5rem;
  color: #2b2b2b;
  line-height: 2;
  max-width: 900px;
  margin: 0 auto 2.5rem;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-family: 'Lora', serif;
  animation: fadeInDelay 1.2s ease-in-out 0.2s backwards;

  @keyframes fadeInDelay {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 0 1rem 2rem;
    max-width: 90%;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0.5rem 1.5rem;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto 2.5rem;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
    margin-bottom: 2rem;

    img {
      height: 300px;
      border-radius: 8px;
    }
  }

  @media (max-width: 400px) {
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    img {
      height: 220px;
    }
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (max-width: 400px) {
    gap: 0.75rem;
    padding: 0 0.5rem;
  }
`;

const StatItem = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 12px;
  width: 100%;
  max-width: 180px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
  }

  h3 {
    font-size: 1.8rem;
    color: #d81b60;
    font-weight: 700;
  }

  p {
    font-size: 0.85rem;
    color: #555;
    font-weight: 400;
  }

  svg {
    color: #d81b60;
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    max-width: 280px;
    padding: 1rem;
    border-radius: 10px;

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 0.9rem;
    }

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 400px) {
    max-width: 240px;
    padding: 0.75rem;

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.8rem;
    }

    svg {
      font-size: 1.3rem;
    }
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
      <Description>
        O‘zbegim Moda Ateliyesi 2018 yilda tashkil etilgan bo‘lib, yuqori sifatli liboslar va professional tikuv xizmatlarini taqdim etishda yetakchi hisoblanadi. Bizning maqsadimiz — har bir mijozning individual uslubini kashf etish va o‘ziga xos dizaynlarni hayotga tatbiq etish. Har bir tikilgan kiyimda nafislik va milliy an’analarni mujassamlashtirib, sizning orzularingizni ro‘yobga chiqaramiz!
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