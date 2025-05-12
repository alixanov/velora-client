import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import video1 from "../../assets/video.mp4";
import video2 from "../../assets/video1.mp4";

const WorkSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #f8bbd0 50%); /* Subtle gradient */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Lora', serif;
`;

const Title = styled(Typography)`
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #d81b60, #f06292); /* Gradient text */
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

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const VideoWrapper = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  video {
    width: 100%;
    height: 600px;
    object-fit: cover;
    display: block;
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