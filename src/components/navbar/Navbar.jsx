import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Phone, Email, Telegram, Instagram } from '@mui/icons-material';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = styled.header`
  background-color: #d81b60; /* Розовый цвет */
  padding: 2rem 0;
  color: #fff;
  font-family: 'Lora', serif;
`;

const ContactContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const ContactLink = styled(MuiLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none; /* Основное правило */
  color: #000000; /* Чистый черный цвет */
  background-color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  
  /* Убираем стандартные синие стили для ссылок */
  &:link, &:visited, &:active {
    color: #000000;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #d81b60; /* Розовый цвет при наведении */
  }
`;

const WelcomeSection = styled(Box)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
`;

const Nav = styled.nav`
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
  flex-wrap: wrap;
`;

const MenuLink = styled(Typography)`
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #f8bbd0; /* Светло-розовый при наведении */
    color: #d81b60; /* Темно-розовый текст */
  }
  &.active {
    background-color: #d81b60; /* Темно-розовый */
    color: #fff;
  }
`;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('bosh-sahifa');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'bosh-sahifa', text: 'Bosh sahifa' },
    { id: 'services', text: 'Xizmatlar' },
    { id: 'order', text: 'Buyurtma berish' },
    { id: 'gallery', text: 'Galereya' },
    {
      id: 'auth',
      text: isAuthenticated ? 'Shaxsiy kabinet' : 'Ro‘yxatdan o‘tish',
      path: isAuthenticated ? '/cabinet' : '/auth',
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    if (location.pathname === '/auth' || location.pathname === '/cabinet') {
      setActiveSection('auth');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    menuItems.forEach((item) => {
      if (item.id !== 'auth') {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname, isAuthenticated]);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <Box>
      <Header>
        <Container>
          <ContactContainer>
            <ContactLink href="tel:+998901234567" aria-label="Phone number">
              <Phone fontSize="small" />
              +998 50 881 06 22
            </ContactLink>
            <ContactLink href="mailto:info@atelie.uz" aria-label="Email address">
              <Email fontSize="small" />
              info@atelie.uz
            </ContactLink>
            <ContactLink href="https://t.me/atelie" aria-label="Telegram">
              <Telegram fontSize="small" />
              Telegram
            </ContactLink>
            <ContactLink href="https://instagram.com/atelie" aria-label="Instagram">
              <Instagram fontSize="small" />
              Instagram
            </ContactLink>
          </ContactContainer>
          <WelcomeSection>
            <Typography variant="h4" component="h1" gutterBottom>
              O‘zbegim Moda Ateliyesiga Hush Kelibsiz!
            </Typography>
            <Typography variant="body1" color="inherit">
              Biz bilan o‘z uslubingizni yarating va nafis tikuv xizmatlarimizdan bahramand bo‘ling!
            </Typography>
          </WelcomeSection>
        </Container>
      </Header>
      <Nav>
        <Container>
          <MenuContainer>
            {menuItems.map((item) => (
              item.path ? (
                <MenuLink
                  key={item.id}
                  component={Link}
                  to={item.path}
                  className={activeSection === item.id ? 'active' : ''}
                  aria-label={item.text}
                >
                  {item.text}
                </MenuLink>
              ) : (
                <MenuLink
                  key={item.id}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => handleScroll(item.id)}
                  aria-label={item.text}
                >
                  {item.text}
                </MenuLink>
              )
            ))}
          </MenuContainer>
        </Container>
      </Nav>
    </Box>
  );
};

export default Navbar;