import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Typography, TextField, MenuItem, Select, Button, FormControl, InputLabel } from '@mui/material';

const OrderSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #f8bbd0 50%);
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

const OrderForm = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 10px;
    background-color: #f8f9fa;
  }
  & .MuiInputLabel-root {
    color: #d81b60;
    font-family: 'Lora', serif;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: #d81b60;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #d81b60;
  }
`;

const StyledFormControl = styled(FormControl)`
  & .MuiInputBase-root {
    border-radius: 10px;
    background-color: #f8f9fa;
  }
  & .MuiInputLabel-root {
    color: #d81b60;
    font-family: 'Lora', serif;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: #d81b60;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #d81b60;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #d81b60;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-family: 'Lora', serif;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f06292;
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
    // Clear error on change
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

    // Simulate form submission (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Buyurtmangiz muvaffaqiyatli yuborildi! Operatorlarimiz siz bilan tez orada bog‘lanadi.');
    // Reset form
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