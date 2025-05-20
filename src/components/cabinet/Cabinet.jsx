import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp, Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CabinetContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #fff 0%, #f8bbd0 50%);
  font-family: 'Lora', serif;
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
    const validateToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Sessiya tugagan. Iltimos, qayta kiring.');
        navigate('/auth');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/protected', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          // Store user data in localStorage and state
          setName(data.user.name);
          setEmail(data.user.email);
          localStorage.setItem('name', data.user.name);
          localStorage.setItem('email', data.user.email);
        } else {
          setError(data.error || 'Sessiya tugagan. Iltimos, qayta kiring.');
          localStorage.removeItem('token');
          localStorage.removeItem('name');
          localStorage.removeItem('email');
          navigate('/auth');
        }
      } catch (err) {
        console.error('Token Validation Error:', err);
        setError('Server bilan bog‘lanishda xatolik.');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        navigate('/auth');
      }
    };

    validateToken();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
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