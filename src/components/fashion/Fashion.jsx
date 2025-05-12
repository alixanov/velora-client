import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { ShoppingCart, Star } from '@mui/icons-material';

// Импорт изображений
import maxsus1 from '../../assets/maxsus_libos.jpg';
import maxsus2 from '../../assets/maxsus_libos1.jpg';
import maxsus3 from '../../assets/maxsus_libos2.jpg';
import maxsus4 from '../../assets/maxsus_libos3.jpg';
import maxsus5 from '../../assets/maxsus_libos4.jpg';
import maxsus6 from '../../assets/maxsus_libos5.jpg';
import maxsus7 from '../../assets/maxsus_libos6.jpg';
import maxsus8 from '../../assets/maxsus_libos7.jpg';
import toy1 from '../../assets/toy_uchun1.png';
import toy2 from '../../assets/toy_uchun2.png';
import toy3 from '../../assets/toy_uchun3.png';
import toy4 from '../../assets/toy_uchun.png';
import toy5 from '../../assets/toy_uchun1.png';
import toy6 from '../../assets/toy_uchun2.png';
import toy7 from '../../assets/toy_uchun3.png';
import toy8 from '../../assets/toy_uchun4.png';
import toy9 from '../../assets/toy_uchun5.png';
import toy10 from '../../assets/toy_uchun6.png';
import toy11 from '../../assets/toy_uchun7.png';
import toy12 from '../../assets/toy_uchun4.png';
import toy13 from '../../assets/toy_uchun5.png';
import toy14 from '../../assets/toy_uchun6.png';
import toy15 from '../../assets/toy_uchun7.png';
import toy16 from '../../assets/toy_uchun8.png';
import toy17 from '../../assets/toy_uchun9.png';
import toy18 from '../../assets/toy_uchun10.png';
import toy19 from '../../assets/toy_uchun11.png';
import toy20 from '../../assets/toy_uchun12.png';
import toy21 from '../../assets/toy_uchun13.png';
import toy22 from '../../assets/toy_uchun14.png';
import toy23 from '../../assets/toy_uchun15.png';
import toy24 from '../../assets/toy_uchun16.png';
import toy25 from '../../assets/toy_uchun8.png';
import toy26 from '../../assets/toy_uchun9.png';
import toy27 from '../../assets/toy_uchun10.png';
import toy28 from '../../assets/toy_uchun11.png';
import toy29 from '../../assets/toy_uchun12.png';
import toy30 from '../../assets/toy_uchun13.png';
import toy31 from '../../assets/toy_uchun14.png';
import toy32 from '../../assets/toy_uchun15.png';
import toy33 from '../../assets/toy_uchun16.png';
import toy34 from '../../assets/toy_uchun1.png';
import toy35 from '../../assets/toy_uchun2.png';
import toy36 from '../../assets/toy_uchun3.png';
import toy37 from '../../assets/toy_uchun4.png';
import toy38 from '../../assets/toy_uchun.png';
import kundalik1 from '../../assets/kundalik21.jpg';
import kundalik2 from '../../assets/kundalik22.jpg';
import kundalik3 from '../../assets/kundalik23.jpg';
import kundalik4 from '../../assets/kundalik24.jpg';
import kundalik5 from '../../assets/kundalik25.jpg';
import kundalik6 from '../../assets/kundalik26.jpg';
import kundalik7 from '../../assets/kundalik27.jpg';
import kundalik8 from '../../assets/kundalik18.jpg';
import kundalik9 from '../../assets/kundalik19.jpg';
import kundalik10 from '../../assets/kundalik20.jpg';
import kundalik11 from '../../assets/kundalik_uchun1.png';
import kundalik12 from '../../assets/kundalik_uchun2.png';
import kundalik13 from '../../assets/kundalik_uchun3.png';
import kundalik14 from '../../assets/kundalik_uchun4.png';
import kundalik15 from '../../assets/kundalik_uchun5.png';
import kundalik16 from '../../assets/kundalik_uchun6.png';
import kundalik17 from '../../assets/kundalik_uchun7.png';
import kundalik18 from '../../assets/kundalik_uchun8.png';
import kundalik19 from '../../assets/kundalik_uchun9.png';
import kundalik20 from '../../assets/kundalik_uchun10.png';

// Стили
const FashionContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f3f4f6;
  font-family: 'Lora', serif;
  min-height: 100vh;
    font-family: 'Lora', serif;

`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #d81b60;
  text-align: center;
  margin-bottom: 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #d81b60;
  border: none;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2185b;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #d81b60;
  margin-top: 2rem;
`;

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ModalTitle = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 600;
  color: #d81b60;
  text-align: center;
`;

const FormField = styled(TextField)`
  width: 100%;
`;

const PayButton = styled(Button)`
  background-color: ${(props) => (props.success ? '#4caf50' : '#d81b60')};
  color: #fff;
  padding: 0.75rem;
  border-radius: 10px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.success ? '#45a049' : '#c2185b')};
  }
`;

// Компонент галереи
const Gallery = ({ images, serviceName }) => {
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardError, setCardError] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [success, setSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (imageAlt) => {
    setSelectedImage(imageAlt);
    setOpen(true);
    setCardNumber('');
    setExpiryDate('');
    setCardError('');
    setExpiryError('');
    setSuccess(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(value);
    if (value.length === 16) {
      setCardError('');
    } else {
      setCardError('Karta raqami 16 raqamdan iborat bo‘lishi kerak');
    }
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length >= 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setExpiryDate(value);
    if (/^\d{2}\/\d{2}$/.test(value)) {
      const [month] = value.split('/').map(Number);
      if (month >= 1 && month <= 12) {
        setExpiryError('');
      } else {
        setExpiryError('Noto‘g‘ri oy (01-12)');
      }
    } else {
      setExpiryError('MM/YY formatida kiriting');
    }
  };

  const handlePayment = () => {
    if (cardNumber.length !== 16) {
      setCardError('Karta raqami 16 raqamdan iborat bo‘lishi kerak');
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      setExpiryError('MM/YY formatida kiriting');
      return;
    }
    const [month] = expiryDate.split('/').map(Number);
    if (month < 1 || month > 12) {
      setExpiryError('Noto‘g‘ri oy (01-12)');
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      handleClose();
      setSuccess(false);
    }, 2000);
  };

  return (
    <GalleryContainer>
      <GalleryTitle>{serviceName}</GalleryTitle>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index}>
            <GalleryImage src={image.src} alt={image.alt} loading="lazy" />
            <OrderButton onClick={() => handleOpen(image.alt)}>
              <ShoppingCart /> Buyurtma berish
            </OrderButton>
          </GalleryItem>
        ))}
      </GalleryGrid>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ModalTitle>Tashrif buyurtma: {selectedImage}</ModalTitle>
          <FormField
            label="Karta raqami (16 raqam)"
            variant="outlined"
            value={cardNumber}
            onChange={handleCardNumberChange}
            inputProps={{ maxLength: 16, inputMode: 'numeric' }}
            error={!!cardError}
            helperText={cardError}
            disabled={success}
          />
          <FormField
            label="Amal qilish muddati (MM/YY)"
            variant="outlined"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            inputProps={{ maxLength: 5 }}
            error={!!expiryError}
            helperText={expiryError}
            disabled={success}
          />
          <PayButton onClick={handlePayment} success={success} disabled={success}>
            {success ? 'Muvaffaqiyatli' : 'To‘lash'}
          </PayButton>
        </ModalContainer>
      </Modal>
    </GalleryContainer>
  );
};

// Основной компонент
const Fashion = () => {
  const { serviceId } = useParams();

  const services = {
    maxsus: {
      name: 'Maxsus liboslar',
      images: [
        { src: maxsus1, alt: 'Maxsus libos 1' },
        { src: maxsus2, alt: 'Maxsus libos 2' },
        { src: maxsus3, alt: 'Maxsus libos 3' },
        { src: maxsus4, alt: 'Maxsus libos 4' },
        { src: maxsus5, alt: 'Maxsus libos 5' },
        { src: maxsus6, alt: 'Maxsus libos 6' },
        { src: maxsus7, alt: 'Maxsus libos 7' },
        { src: maxsus8, alt: 'Maxsus libos 8' },
      ],
    },
    toy: {
      name: "To'y uchun",
      images: [
        { src: toy1, alt: "To'y uchun 1" },
        { src: toy2, alt: "To'y uchun 2" },
        { src: toy3, alt: "To'y uchun 3" },
        { src: toy4, alt: "To'y uchun 4" },
        { src: toy5, alt: "To'y uchun 5" },
        { src: toy6, alt: "To'y uchun 6" },
        { src: toy7, alt: "To'y uchun 7" },
        { src: toy8, alt: "To'y uchun 8" },
        { src: toy9, alt: "To'y uchun 9" },
        { src: toy10, alt: "To'y uchun 10" },
        { src: toy11, alt: "To'y uchun 11" },
        { src: toy12, alt: "To'y uchun 12" },
        { src: toy13, alt: "To'y uchun 13" },
        { src: toy14, alt: "To'y uchun 14" },
        { src: toy15, alt: "To'y uchun 15" },
        { src: toy16, alt: "To'y uchun 16" },
        { src: toy17, alt: "To'y uchun 17" },
        { src: toy18, alt: "To'y uchun 18" },
        { src: toy19, alt: "To'y uchun 19" },
        { src: toy20, alt: "To'y uchun 20" },
        { src: toy21, alt: "To'y uchun 21" },
        { src: toy22, alt: "To'y uchun 22" },
        { src: toy23, alt: "To'y uchun 23" },
        { src: toy24, alt: "To'y uchun 24" },
        { src: toy25, alt: "To'y uchun 25" },
        { src: toy26, alt: "To'y uchun 26" },
        { src: toy27, alt: "To'y uchun 27" },
        { src: toy28, alt: "To'y uchun 28" },
        { src: toy29, alt: "To'y uchun 29" },
        { src: toy30, alt: "To'y uchun 30" },
        { src: toy31, alt: "To'y uchun 31" },
        { src: toy32, alt: "To'y uchun 32" },
        { src: toy33, alt: "To'y uchun 33" },
        { src: toy34, alt: "To'y uchun 34" },
        { src: toy35, alt: "To'y uchun 35" },
        { src: toy36, alt: "To'y uchun 36" },
        { src: toy37, alt: "To'y uchun 37" },
        { src: toy38, alt: "To'y uchun 38" },
      ],
    },
    kundalik: {
      name: 'Kundalik',
      images: [
        { src: kundalik1, alt: 'Kundalik 1' },
        { src: kundalik2, alt: 'Kundalik 2' },
        { src: kundalik3, alt: 'Kundalik 3' },
        { src: kundalik4, alt: 'Kundalik 4' },
        { src: kundalik5, alt: 'Kundalik 5' },
        { src: kundalik6, alt: 'Kundalik 6' },
        { src: kundalik7, alt: 'Kundalik 7' },
        { src: kundalik8, alt: 'Kundalik 8' },
        { src: kundalik9, alt: 'Kundalik 9' },
        { src: kundalik10, alt: 'Kundalik 10' },
        { src: kundalik11, alt: 'Kundalik 11' },
        { src: kundalik12, alt: 'Kundalik 12' },
        { src: kundalik13, alt: 'Kundalik 13' },
        { src: kundalik14, alt: 'Kundalik 14' },
        { src: kundalik15, alt: 'Kundalik 15' },
        { src: kundalik16, alt: 'Kundalik 16' },
        { src: kundalik17, alt: 'Kundalik 17' },
        { src: kundalik18, alt: 'Kundalik 18' },
        { src: kundalik19, alt: 'Kundalik 19' },
        { src: kundalik20, alt: 'Kundalik 20' },
      ],
    },
  };

  return (
    <FashionContainer>
      {services[serviceId] ? (
        <Gallery images={services[serviceId].images} serviceName={services[serviceId].name} />
      ) : (
        <ErrorMessage>Xizmat topilmadi</ErrorMessage>
      )}
    </FashionContainer>
  );
};

export default Fashion;