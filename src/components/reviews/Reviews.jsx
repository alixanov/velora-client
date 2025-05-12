import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Star } from '@mui/icons-material';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReviewsSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
  min-height: 100vh;
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

const FormContainer = styled(Box)`
  max-width: 600px;
  width: 100%;
  margin-bottom: 3rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 600;
  color: #d81b60;
  margin-bottom: 1.5rem;
`;

const FormField = styled(TextField)`
  margin-bottom: 1.5rem;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  background-color: #d81b60;
  color: #fff;
  padding: 0.75rem 2rem;
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
  margin-top: 1rem;
`;

const SwiperContainer = styled(Box)`
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  .swiper {
    padding-bottom: 3rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background-color: #d81b60;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: #d81b60;
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #d81b60;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }

    &::after {
      font-size: 1.5rem;
    }
  }
`;

const Testimonial = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 350px;
  text-align: center;

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
    justify-content: center;
    gap: 0.5rem;
  }

  svg {
    color: #d81b60;
    font-size: 1.2rem;
  }
`;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Загрузка отзывов
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/reviews');
      console.log('API Response:', response.data); // Debug log
      if (response.data.success && Array.isArray(response.data.reviews)) {
        setReviews(response.data.reviews);
      } else {
        setReviews([]);
      }
      setError('');
    } catch (err) {
      console.error('Fetch Error:', err);
      setError('Отзывы не удалось загрузить. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  // Отправка отзыва
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/reviews', {
        author: author.trim(),
        text: text.trim(),
      });
      console.log('Submit Response:', response.data); // Debug log
      if (response.data.success && response.data.review) {
        setReviews([response.data.review, ...reviews]);
        setAuthor('');
        setText('');
        setError('');
      }
    } catch (err) {
      console.error('Submit Error:', err);
      setError('Не удалось отправить отзыв. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  // Загружаем отзывы при монтировании компонента
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <ReviewsSection>
      <Title variant="h2" component="h2">
        Mijozlarimiz fikri
      </Title>

      {loading && !reviews.length ? (
        <Typography>Loading...</Typography>
      ) : reviews.length > 0 ? (
        <SwiperContainer>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              600: { slidesPerView: 2, spaceBetween: 20 },
              900: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {reviews.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Testimonial>
                  <p>{testimonial.text}</p>
                  <strong>
                    <Star /> {testimonial.author}
                  </strong>
                </Testimonial>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      ) : (
        <Typography>Hozircha fikrlar yo‘q.</Typography>
      )}

      <FormContainer component="form" onSubmit={handleSubmit}>
        <FormTitle variant="h3" component="h3">
          O‘z fikringizni qoldiring
        </FormTitle>
        <FormField
          label="Ismingiz"
          variant="outlined"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          disabled={loading}
          required
        />
        <FormField
          label="Fikringiz"
          variant="outlined"
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
          required
        />
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Yuborilmoqda...' : 'Fikr qoldirish'}
        </SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormContainer>
    </ReviewsSection>
  );
};

export default Reviews;