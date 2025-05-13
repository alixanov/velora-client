import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Celebration, LocalLaundryService, DesignServices } from '@mui/icons-material';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #fce4ec 100%); /* Softer gradient */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
  min-height: 100vh;
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
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }

  @media (max-width: 400px) {
    padding: 0.75rem;
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
  font-size: 1.2rem;
  color: #d81b60;
  font-weight: 500;
  transition: color 0.3s ease;

  ${ServiceItem}:hover & {
    color: #f06292;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

const ServiceIcon = styled.div`
  color: #d81b60;
  font-size: 2.5rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`;

const Services = () => {
  const services = [
    {
      text: 'Kundalik kiyim uchun liboslar',
      icon: <LocalLaundryService />,
      href: '/services/kundalik',
    },
    {
      text: 'Bayram va to‘y uchun liboslar',
      icon: <Celebration />,
      href: '/services/toy',
    },
    {
      text: 'Maxsus dizayn bilan tikilgan liboslar',
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
            </ServiceLink>
          </ServiceItem>
        ))}
      </ServicesList>
    </ServicesSection>
  );
};

export default Services;