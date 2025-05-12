import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Celebration, LocalLaundryService, DesignServices } from '@mui/icons-material';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
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

const ServicesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

const ServiceItem = styled.li`
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none; /* Убираем подчеркивание для ссылки */
  cursor: pointer; /* Указываем, что элемент кликабелен */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
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
`;

const ServiceIcon = styled.div`
  color: #d81b60;
  font-size: 2.5rem;
  margin-bottom: 1rem;
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