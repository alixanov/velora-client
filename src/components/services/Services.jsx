import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Celebration, LocalLaundryService, DesignServices } from '@mui/icons-material';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #fce4ec 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
  min-height: 70vh;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
    min-height: 80vh;
  }

  @media (max-width: 400px) {
    padding: 1rem 0.5rem;
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
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
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
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 400px) {
    gap: 0.75rem;
  }
`;

const ServiceItem = styled.li`
  margin-top: 2.5rem;

  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(252, 228, 236, 0.7));
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(5px); /* Glassmorphism effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }

  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

const ServiceLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceText = styled.span`
  font-size: 1.3rem;
  color: #d81b60;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease;
  margin-bottom: 0.5rem;

  ${ServiceItem}:hover & {
    color: #f06292;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const ServiceDescription = styled.span`
  font-size: 0.95rem;
  color: #4a4a4a;
  font-weight: 400;
  line-height: 1.5;
  max-width: 90%;
  font-style: italic;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const ServiceIcon = styled.div`
  color: #d81b60;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #d81b60, #f06292);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const Services = () => {
  const services = [
    {
      text: 'Kundalik kiyim uchun liboslar',
      description: 'Qulay va zamonaviy kiyimlar har kuni uchun.',
      icon: <LocalLaundryService />,
      href: '/services/kundalik',
    },
    {
      text: 'Bayram va to‘y uchun liboslar',
      description: 'Nafis va muhtasham liboslar maxsus kunlar uchun.',
      icon: <Celebration />,
      href: '/services/toy',
    },
    {
      text: 'Maxsus dizayn bilan tikilgan liboslar',
      description: 'Sizning uslubingizga mos noyob dizaynlar.',
      icon: <DesignServices />,
      href: '/services/maxsus',
    },
  ];

  return (
    <ServicesSection>
      <Title variant="h2" component="h2">
        Xizmatlarimiz
      </Title>
      <ServicesList>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <ServiceLink to={service.href}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceText>{service.text}</ServiceText>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceLink>
          </ServiceItem>
        ))}
      </ServicesList>
    </ServicesSection>
  );
};

export default Services;