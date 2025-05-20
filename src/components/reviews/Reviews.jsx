import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Star } from '@mui/icons-material';
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
  background: linear-gradient(180deg, #f8f9fa 0%, #fce4ec 100%);
`;

const Title = styled(Typography)`
  font-size: 3rem;
  font-weight: 700;
  color: #d91a60;
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(217, 26, 96, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(217, 26, 96, 0.2);
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled(Typography)`
  font-size: 1.8rem !important ;
  font-weight: 700;
  background: linear-gradient(45deg, #d91a60, #ff4081);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem !important;
  animation: bounceIn 0.8s ease-out;

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const FormField = styled(TextField)`
  margin-bottom: 1.5rem;
  width: 100%;

  & .MuiOutlinedInput-root {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.8);
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 1);
    }

    &.Mui-focused fieldset {
      border-color: #d91a60;
      box-shadow: 0 0 8px rgba(217, 26, 96, 0.3);
    }
  }

  & .MuiInputLabel-root {
    color: #666;
    font-weight: 500;
    &.Mui-focused {
      color: #d91a60;
    }
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
    border-bottom: 2px solid #d91a60;
    transition: border-bottom 0.3s ease;
  }

  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-bottom: 3px solid #d91a60;
  }
`;

const SubmitButton = styled(Button)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, #d91a60, #ff4081);
    color: #fff !important ;margin-top: 2rem !important;
  padding: 0.9rem 3rem;
  border-radius: 15px;
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

  &:disabled {
    background: linear-gradient(45deg, #d91a60, #ff4081);
    opacity: 0.5;
    color: #fff;
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
`;

const ErrorMessage = styled(Typography)`
  color: #e91e63;
  font-size: 1.1rem;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  animation: fadeInError 0.5s ease-in;

  @keyframes fadeInError {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
    background-color: #d91a60;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: #d91a60;
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    width: 44px;
    height: 44px;
    background: linear-gradient(45deg, #d91a60, #ff4081);
    border-radius: 50%;
    box-shadow: 0 3px 8px rgba(217, 26, 96, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;

    &:hover {
      background: linear-gradient(45deg, #c2185b, #f50057);
      transform: scale(1.1);
      box-shadow: 0 5px 12px rgba(217, 26, 96, 0.4);
    }

    &::after {
      font-size: 1.2rem;
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
    color: #d91a60;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  svg {
    color: #d91a60;
    font-size: 1.2rem;
  }
`;

const fakeReviews = [
  {
    author: 'Zilola',
    text: 'Ajoyib xizmat! Kiyimlarimni tez va sifatli tikishdi. Albatta yana murojaat qilaman!',
  },
  {
    author: 'Rustam',
    text: 'Atelie xodimlari juda mehribon va professional. Dizaynlar o‘ziga xos va chiroyli.',
  },
  {
    author: 'Madina',
    text: 'Maxsus buyurtma qildim, natija kutilganidan ham yaxshi bo‘ldi. Rahmat!',
  },
  {
    author: 'Oybek',
    text: 'Tez yetkazib berish va ajoyib sifat. Hammaga tavsiya qilaman!',
  },
  {
    author: 'Nodira',
    text: 'Kiyimlarning detallari va tikuv sifati yuqori darajada. Juda mamnunman!',
  },
  {
    author: 'Shaxzod',
    text: 'Individual yondashuv va mijozlarga e’tibor meni hayratda qoldirdi.',
  },
  {
    author: 'Gulnoza',
    text: 'Ateliedagi xizmatlar narxi va sifati muvozanatda. Yana qaytaman!',
  },
  {
    author: 'Jasur',
    text: 'Buyurtmani o‘z vaqtida oldim, hamma narsa mukammal edi.',
  },
  {
    author: 'Feruza',
    text: 'Dizaynlar zamonaviy va o‘zbekona ruhda. Juda yoqdi!',
  },
  {
    author: 'Aziz',
    text: 'Professional jamoa, har bir detalga e’tibor berishadi. 5 yulduz!',
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch reviews from server
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reviews', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (data.success) {
          setReviews(data.reviews.length > 0 ? data.reviews : fakeReviews);
        } else {
          setError('Fikrlarni yuklashda xatolik yuz berdi.');
          setReviews(fakeReviews);
        }
      } catch (err) {
        console.error('Fetch Reviews Error:', err);
        setError('Server bilan bog‘lanishda xatolik.');
        setReviews(fakeReviews);
      }
    };

    fetchReviews();
  }, []);

  // Submit a new review to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) {
      setError('Iltimos, barcha maydonlarni to‘ldiring.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ author: author.trim(), text: text.trim() }),
      });
      const data = await response.json();

      if (data.success) {
        setReviews([data.review, ...reviews]);
        setAuthor('');
        setText('');
        setError('');
      } else {
        setError(data.error || 'Fikrni yuborishda xatolik yuz berdi.');
      }
    } catch (err) {
      console.error('Submit Review Error:', err);
      setError('Server bilan bog‘lanishda xatolik.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReviewsSection>
      <Title variant="h2" component="h2">
        Mijozlarimiz fikri
      </Title>

      {reviews.length > 0 ? (
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
        <FormTitle>
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