import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import { Star } from '@mui/icons-material'; // Adding stars for rating effect

const ReviewsSection = styled.section`
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
  color: #d81b60;
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

const TestimonialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Testimonial = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  p {
    font-size: 1.1rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-style: italic;
  }

  strong {
    font-size: 1rem;
    color: #d81b60;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: #d81b60;
    font-size: 1.2rem;
  }
`;

const Reviews = () => {
  const testimonials = [
    {
      text: '"Ateliyedagi xizmat zo‘r! Libosim juda chiroyli chiqdi."',
      author: 'Laylo A.',
    },
    {
      text: '"Tikuvchilarning e‘tibori va dizaynlari meni hayratga soldi."',
      author: 'Dildora R.',
    },
    {
      text: '"Libosim juda sifatli, o‘z vaqtida tayyor bo‘ldi. Rahmat!"',
      author: 'Nargiza M.',
    },
  ];

  return (
    <ReviewsSection>
      <Title variant="h2" component="h2">
        Mijozlarimiz fikri
      </Title>
      <TestimonialContainer>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}>
            <p>{testimonial.text}</p>
            <strong>
              <Star /> {testimonial.author}
            </strong>
          </Testimonial>
        ))}
      </TestimonialContainer>
    </ReviewsSection>
  );
};

export default Reviews;