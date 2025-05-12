import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Button, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import { ExitToApp, Email, Menu as MenuIcon } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the backend URL using an environment variable
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const CabinetContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  background: linear-gradient(180deg, #fff 0%, #f8bbd0 50%);
  font-family: 'Lora', serif;
`;

const Navbar = styled(AppBar)`
  background-color: #d81b60;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavbarContent = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
`;

const CabinetCard = styled(Box)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;
  text-align: center;
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

const WelcomeText = styled(Typography)`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #d81b60, #f06292);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

const InfoText = styled(Typography)`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: #d81b60;
    font-size: 1.3rem;
  }
`;

const LogoutButton = styled(Button)`
  background-color: #d81b60;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  font-family: 'Lora', serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2185b;
  }

  svg {
    font-size: 1.1rem;
  }
`;

const Footer = styled(Box)`
  background-color: #d81b60;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

const ErrorMessage = styled(Typography)`
  font-size: 1.3rem;
  color: #d81b60;
  margin-top: 1rem;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Cabinet = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
      return;
    }

    axios
      .get(`${API_URL}/api/protected`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log('API Response:', response.data); // Debug log
        if (response.data.success && response.data.user) {
          setName(response.data.user.name);
          setEmail(response.data.user.email);
        } else {
          throw new Error('Invalid response structure');
        }
      })
      .catch((err) => {
        console.error('Fetch Error:', err);
        setError('Sessiya tugagan. Iltimos, qayta kiring.');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/auth');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    navigate('/auth');
  };

  return (
    <CabinetContainer>
  
      <MainContent>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <CabinetCard>
            <WelcomeText>Xush kelibsiz, {name}!</WelcomeText>
            <InfoText>
              <Email /> Email: {email}
            </InfoText>
            <LogoutButton onClick={handleLogout}>
              <ExitToApp /> Chiqish
            </LogoutButton>
          </CabinetCard>
        )}
      </MainContent>
   
    </CabinetContainer>
  );
};

export default Cabinet;