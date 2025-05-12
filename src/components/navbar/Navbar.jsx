import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Phone, Email, Telegram, Instagram } from '@mui/icons-material';
import { Box, Container, Typography, Link } from '@mui/material';

const Header = styled.header`
  background-color: #d81b60;
  padding: 2rem 0;
  color: #fff;
`;

const ContactContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333;
  background-color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
    background-color: #e9ecef;
    color: #d81b60;
  }
  &.active {
    background-color: #d81b60;
    color: #fff;
  }
`;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('bosh-sahifa');

  const menuItems = [
    { id: 'bosh-sahifa', text: 'Bosh sahifa' },
    { id: 'services', text: 'Xizmatlar' },
    { id: 'order', text: 'Buyurtma berish' },
    { id: 'gallery', text: 'Galereya' },
    { id: 'contact', text: 'Aloqa' },
  ];

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Секция считается видимой, если 50% в области просмотра
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
              <MenuLink
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => handleScroll(item.id)}
                aria-label={item.text}
              >
                {item.text}
              </MenuLink>
            ))}
          </MenuContainer>
        </Container>
      </Nav>
    </Box>
  );
};

export default Navbar;