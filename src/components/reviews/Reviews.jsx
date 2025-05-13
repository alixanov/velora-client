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

  // Загрузка отзывов из localStorage и объединение с фейковыми
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews([...storedReviews, ...fakeReviews]);
  }, []);

  // Отправка отзыва
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) {
      setError('Iltimos, barcha maydonlarni to‘ldiring.');
      return;
    }

    setLoading(true);
    const newReview = {
      author: author.trim(),
      text: text.trim(),
    };

    // Сохранение в localStorage
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const updatedReviews = [newReview, ...storedReviews];
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    // Обновление состояния
    setReviews([newReview, ...reviews]);
    setAuthor('');
    setText('');
    setError('');
    setLoading(false);
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