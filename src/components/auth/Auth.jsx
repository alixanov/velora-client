import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, TextField, Button, Typography, Link as MuiLink } from '@mui/material';
import { Home } from '@mui/icons-material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define the backend URL using an environment variable
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d81b60',
      contrastText: '#fff',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#d81b60',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d81b60',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#d81b60',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-contained': {
            backgroundColor: '#d81b60',
            '&:hover': {
              backgroundColor: '#c2185b',
            },
          },
        },
      },
    },
  },
});

const AuthContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  font-family: 'Lora', serif;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const FormContainer = styled(Box)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1;
`;

const FormTitle = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 600;
  color: #d81b60;
  text-align: center;
`;

const FormField = styled(TextField)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  background-color: #d81b60;
  color: #fff;
  padding: 0.75rem;
  border-radius: 10px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2185b;
  }
`;

const ErrorMessage = styled(Typography)`
  color: #d81b60;
  font-size: 1rem;
  text-align: center;
`;

const SwitchLink = styled(MuiLink)`
  color: #d81b60;
  text-align: center;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #c2185b;
  }
`;

const HomeButton = styled(Button)`
  position: absolute;
  top: -22rem;
  left:-30rem;
  background-color: #d81b60;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-family: 'Lora', serif;
  font-weight: 600;
  text-transform: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: rgb(255, 210, 228);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    if (isRegister && !name.trim()) {
      setError('Ismni kiriting');
      return false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('To‘g‘ri email kiriting');
      return false;
    }
    if (password.length < 6) {
      setError('Parol kamida 6 belgi bo‘lishi kerak');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateInputs()) return;

    try {
      setLoading(true);
      const endpoint = isRegister ? '/api/register' : '/api/login';
      const payload = isRegister ? { name, email, password } : { email, password };
      const response = await axios.post(`${API_URL}${endpoint}`, payload);

      console.log('API Response:', response.data); // Debug log
      if (response.data.success && response.data.token && response.data.user) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.user.name);
        navigate('/cabinet');
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setError(err.response?.data?.error || (isRegister ? 'Ro‘yxatdan o‘tishda xatolik' : 'Kirishda xatolik'));
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthContainer>
        <HomeButton component={Link} to="/">
          <Home />
        </HomeButton>
        <FormContainer component="form" onSubmit={handleSubmit}>
          <FormTitle>{isRegister ? 'Ro‘yxatdan o‘tish' : 'Kirish'}</FormTitle>
          {isRegister && (
            <FormField
              label="Ismingiz"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              error={!!error && error.includes('Ismni')}
              helperText={error.includes('Ismni') ? error : ''}
              fullWidth
            />
          )}
          <FormField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            error={!!error && error.includes('email')}
            helperText={error.includes('email') ? error : ''}
            fullWidth
          />
          <FormField
            label="Parol"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            error={!!error && error.includes('Parol')}
            helperText={error.includes('Parol') ? error : ''}
            fullWidth
          />
          <SubmitButton type="submit" disabled={loading} fullWidth>
            {loading ? 'Yuklanmoqda...' : isRegister ? 'Ro‘yxatdan o‘tish' : 'Kirish'}
          </SubmitButton>
          {error && !error.includes('Ismni') && !error.includes('email') && !error.includes('Parol') && (
            <ErrorMessage>{error}</ErrorMessage>
          )}
          <SwitchLink onClick={toggleMode}>
            {isRegister ? 'Allaqachon akkountingiz bormi? Kirish' : 'Akkountingiz yo‘qmi? Ro‘yxatdan o‘ting'}
          </SwitchLink>
        </FormContainer>
      </AuthContainer>
    </ThemeProvider>
  );
};

export default Auth;