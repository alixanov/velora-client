import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import video1 from "../../assets/video.mp4";
import video2 from "../../assets/video1.mp4";

const WorkSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #fce4ec 100%); /* Softer gradient */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
    min-height: 80vh;
  }

  @media (max-width: 400px) {
    padding: 1rem 0.5rem;
  }
`;

const Title = styled(Typography)`
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #d81b60, #f06292);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 400px) {
    gap: 0.75rem;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  video {
    width: 100%;
    height: auto; /* Changed from fixed 600px */
    max-height: 500px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 600px) {
    border-radius: 10px;
  }

  @media (max-width: 400px) {
    border-radius: 8px;
  }
`;

const Work = () => {
  const videos = [
    { src: video1, alt: "Ishlash jarayoni 1" },
    { src: video2, alt: "Ishlash jarayoni 2" },
  ];

  return (
    <WorkSection>
      <Title variant="h2" component="h2">
        Bizning ishlash jarayonimiz
      </Title>
      <VideoContainer>
        {videos.map((video, index) => (
          <VideoWrapper key={index}>
            <video controls preload="metadata">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoWrapper>
        ))}
      </VideoContainer>
    </WorkSection>
  );
};

export default Work;