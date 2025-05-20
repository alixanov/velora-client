import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Typography, TextField, MenuItem, Select, Button, FormControl, InputLabel } from '@mui/material';

const OrderSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fce4ec 0%, #f8bbd0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
  min-height: 70vh;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 400px) {
    padding: 2rem 0.5rem;
  }
`;

const Title = styled(Typography)`
font-size: 3.5rem !important;
  font-weight: 700;
  background: linear-gradient(45deg, #d81b60, #ff4081);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
margin-bottom: 2rem !important;

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

  @media (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

const OrderForm = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(217, 26, 96, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(217, 26, 96, 0.2);
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.8);
    transition: background 0.2s ease;
  }

  & .MuiInputBase-root:hover {
    background: rgba(255, 255, 255, 1);
  }

  & .MuiInputLabel-root {
    color: #666;
    font-family: 'Lora', serif;
    font-weight: 500;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #d81b60;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
    border-bottom: 2px solid #d81b60;
    transition: border-bottom 0.3s ease;
  }

  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-bottom: 3px solid #d81b60;
  }

  & .MuiInputBase-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-bottom: 3px solid #e91e63;
  }

  & .MuiFormHelperText-root {
    color: #e91e63;
    font-family: 'Lora', serif;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    animation: fadeInError 0.5s ease-in;

    @keyframes fadeInError {
      from {
        opacity: 0;
        transform: translateY(5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const StyledFormControl = styled(FormControl)`
  & .MuiInputBase-root {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.8);
    transition: background 0.2s ease;
  }

  & .MuiInputBase-root:hover {
    background: rgba(255, 255, 255, 1);
  }

  & .MuiInputLabel-root {
    color: #666;
    font-family: 'Lora', serif;
    font-weight: 500;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #d81b60;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
    border-bottom: 2px solid #d81b60;
    transition: border-bottom 0.3s ease;
  }

  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-bottom: 3px solid #d81b60;
  }

  & .MuiInputBase-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-bottom: 3px solid #e91e63;
  }
`;

const SubmitButton = styled(Button)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, #d81b60, #ff4081);
  color: white !important;
  padding: 0.9rem 2rem;
  border-radius: 15px;
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: none;
  box-shadow: 0 4px 12px rgba(217, 26, 96, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #c2185b, #f50057);
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(217, 26, 96, 0.5);
    animation: pulse 1.5s infinite;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:active::before {
    width: 200px;
    height: 200px;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(217, 26, 96, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(217, 26, 96, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(217, 26, 96, 0);
    }
  }

  @media (max-width: 600px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;


const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    design: 'Klassik',
    size: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Ismingizni kiriting';
    if (!formData.size.trim()) newErrors.size = 'O‘lchamni kiriting';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log('Form submitted:', formData);
    alert('Buyurtmangiz muvaffaqiyatli yuborildi! Operatorlarimiz siz bilan tez orada bog‘lanadi.');
    setFormData({ name: '', design: 'Klassik', size: '' });
  };

  return (
    <OrderSection id="order">
      <Title variant="h2" component="h2">
        Buyurtma berish
      </Title>
      <OrderForm id="orderForm" onSubmit={handleSubmit}>
        <StyledTextField
          label="Ismingiz"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          error={!!errors.name}
          helperText={errors.name}
        />
        <StyledFormControl fullWidth>
          <InputLabel id="design-label">Dizayn tanlang</InputLabel>
          <Select
            labelId="design-label"
            name="design"
            value={formData.design}
            onChange={handleChange}
            label="Dizayn tanlang"
          >
            <MenuItem value="Klassik">Klassik</MenuItem>
            <MenuItem value="Zamonaviy">Zamonaviy</MenuItem>
            <MenuItem value="Milliy">Milliy</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledTextField
          label="O‘lcham"
          name="size"
          value={formData.size}
          onChange={handleChange}
          required
          fullWidth
          error={!!errors.size}
          helperText={errors.size}
        />
        <SubmitButton type="submit">Buyurtma berish</SubmitButton>
      </OrderForm>
    </OrderSection>
  );
};

export default Order;