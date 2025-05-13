import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, TextField, Button, Typography, Link as MuiLink } from '@mui/material';
import { Home } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 400px) {
    width: 100%; /* Более адаптивное решение */
    margin-left: -60px; /* Убраны кавычки */
  }
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
  top: -21rem;
  left: -34rem;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateInputs()) return;

    try {
      setLoading(true);

      if (isRegister) {
        // Check if user already exists
        const existingUser = localStorage.getItem(`user_${email}`);
        if (existingUser) {
          setError('Bu email bilan foydalanuvchi mavjud');
          setLoading(false);
          return;
        }

        // Save new user data
        const userData = { name, email, password };
        localStorage.setItem(`user_${email}`, JSON.stringify(userData));
        localStorage.setItem('token', `fakeToken_${email}_${Date.now()}`);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

        // Switch to login mode and prefill email
        setIsRegister(false);
        setName('');
        setPassword('');
        setError('Muvaffaqiyatli ro‘yxatdan o‘tdingiz! Endi kiring.');
      } else {
        // Simulate login
        const storedUser = localStorage.getItem(`user_${email}`);
        if (!storedUser) {
          setError('Foydalanuvchi topilmadi');
          setLoading(false);
          return;
        }
        const userData = JSON.parse(storedUser);
        if (userData.password !== password) {
          setError('Noto‘g‘ri parol');
          setLoading(false);
          return;
        }
        localStorage.setItem('token', `fakeToken_${email}_${Date.now()}`);
        localStorage.setItem('name', userData.name);
        localStorage.setItem('email', userData.email);

        // Navigate to cabinet after successful login
        setLoading(false);
        navigate('/cabinet');
      }
    } catch (err) {
      console.error('Local Storage Error:', err);
      setError('Xatolik yuz berdi');
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