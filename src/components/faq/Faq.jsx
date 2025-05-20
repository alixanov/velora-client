import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const FAQSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
  min-height: 100vh;
  background: linear-gradient(180deg, #fce4ec 0%, #f8bbd0 100%);

  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 400px) {
    padding: 2rem 0.5rem;
  }
`;

const Title = styled(Typography)`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #d81b60, #ff4081);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 3rem;
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

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 1rem;
`;

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(217, 26, 96, 0.3);
  margin-bottom: 1.5rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: slideIn 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(217, 26, 96, 0.2);
  }

  @keyframes slideIn {
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
    margin-bottom: 1rem;
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  cursor: pointer;
  background: transparent;
  border-radius: 20px 20px 0 0;
`;

const QuestionText = styled(Typography)`
  font-size: 1.3rem;
  font-weight: 600;
  background: linear-gradient(45deg, #d81b60, #ff4081);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Answer = styled(Collapse)`
  padding: 0 2rem 1.5rem;
`;

const AnswerText = styled(Typography)`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  text-align: left;
  font-weight: 500;
`;

const StyledIconButton = styled(IconButton)`
  color: #fff;
  background: linear-gradient(45deg, #d81b60, #ff4081);
  padding: 8px;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #c2185b, #f50057);
    transform: rotate(180deg);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Qanday qilib buyurtma bersam bo‘ladi?',
      answer: 'Buyurtma berish bo‘limidagi shaklni to‘ldirib bizga yuboring. Operatorlarimiz siz bilan aloqaga chiqadi.',
    },
    {
      question: 'Yetkazib berish xizmatlari mavjudmi?',
      answer: 'Ha, Namangan va boshqa viloyatlarga yetkazib berish xizmati mavjud.',
    },
    {
      question: 'O‘lchamni qanday belgilayman?',
      answer: 'Buyurtma sahifasida o‘lchamingizni yozing. Agar kerak bo‘lsa, operatorlarimiz siz bilan bog‘lanib o‘lchov oladi.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <Title variant="h2" component="h2">
        Savol-javoblar
      </Title>
      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <QuestionHeader onClick={() => handleToggle(index)}>
              <QuestionText variant="body1">{faq.question}</QuestionText>
              <StyledIconButton>
                {openIndex === index ? <ExpandLess /> : <ExpandMore />}
              </StyledIconButton>
            </QuestionHeader>
            <Answer in={openIndex === index} timeout="auto" unmountOnExit>
              <AnswerText variant="body2">{faq.answer}</AnswerText>
            </Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;