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

const FAQContainer = styled.div`
  max-width: 800px;
  width: 100%;
`;

const FAQItem = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  background-color: #f8f9fa;
  border-radius: 15px 15px 0 0;
`;

const QuestionText = styled(Typography)`
  font-size: 1.2rem;
  color: #d81b60;
  font-weight: 600;
`;

const Answer = styled(Collapse)`
  padding: 0 1.5rem 1.5rem;
`;

const AnswerText = styled(Typography)`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  text-align: left;
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
              <IconButton>
                {openIndex === index ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
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