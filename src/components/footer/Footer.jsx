import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Link } from '@mui/material';
import { Phone, Telegram, LocationOn, Instagram, YouTube } from '@mui/icons-material';
import logo from '../../assets/logoooooo.png';

const FooterSection = styled.footer`
  padding: 4rem 2rem;
  background-color: #d81b60;
  font-family: 'Lora', serif;
  color: #fff;
  min-height: 300px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
    min-height: 250px;
  }

  @media (max-width: 400px) {
    padding: 1rem 0.5rem;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
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

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &.footer-logo {
    img {
      max-width: 150px;
      height: auto;
      margin-bottom: 0.75rem;
    }
    p {
      font-size: 0.9rem;
      color: #fff;
    }

    @media (max-width: 600px) {
      img {
        max-width: 120px;
      }
      p {
        font-size: 0.85rem;
      }
    }

    @media (max-width: 400px) {
      img {
        max-width: 100px;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

const FooterTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #f06292;
    }
  }

  svg {
    color: #fff;
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
    a {
      font-size: 0.9rem;
    }
    svg {
      font-size: 1rem;
    }
  }

  @media (max-width: 400px) {
    a {
      font-size: 0.85rem;
    }
    svg {
      font-size: 0.9rem;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.75rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;

    svg {
      width: 28px;
      height: 28px;
      transition: transform 0.3s ease, color 0.3s ease;
      border-radius: 50%;
      padding: 4px;
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:hover svg {
      transform: scale(1.1);
      color: #f06292;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 600px) {
    gap: 1rem;
    svg {
      width: 24px;
      height: 24px;
      padding: 3px;
    }
  }

  @media (max-width: 400px) {
    gap: 0.75rem;
    svg {
      width: 20px;
      height: 20px;
      padding: 2px;
    }
  }
`;

const Footer = () => {
  const usefulLinks = [
    { text: 'Bosh sahifa', href: '#home' },
    { text: 'Menyu', href: '#menu' },
    { text: 'Biz haqimizda', href: '#about' },
    { text: 'Galereya', href: '#gallery' },
    { text: 'Aloqa', href: '#contact' },
  ];

  const contactInfo = [
    { text: '+998 50 881 06 22', href: 'tel:+998508810622', icon: <Phone /> },
    { text: 'Telegram', href: 'https://t.me/atelie', icon: <Telegram />, target: '_blank' },
    {
      text: 'Manzil',
      href: 'https://maps.google.com/?q=2RJX+P52,R-118,Uyci,Namangan,Uzbekistan',
      icon: <LocationOn />,
      target: '_blank',
    },
  ];

  const socialLinks = [
    { href: 'https://t.me/atelie', icon: <Telegram />, alt: 'Telegram' },
    { href: 'https://instagram.com/atelie', icon: <Instagram />, alt: 'Instagram' },
    { href: 'https://youtube.com/atelie', icon: <YouTube />, alt: 'YouTube' },
  ];

  return (
    <FooterSection>
      <FooterContainer>
        <FooterColumn>
          <FooterTitle variant="h3">Foydali havolalar</FooterTitle>
          <FooterList>
            {usefulLinks.map((link, index) => (
              <FooterListItem key={index}>
                <Link href={link.href}>{link.text}</Link>
              </FooterListItem>
            ))}
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle variant="h3">Bog‘lanish</FooterTitle>
          <FooterList>
            {contactInfo.map((info, index) => (
              <FooterListItem key={index}>
                {info.icon}
                <Link href={info.href} target={info.target || '_self'} rel={info.target ? 'noopener noreferrer' : undefined}>
                  {info.text}
                </Link>
              </FooterListItem>
            ))}
          </FooterList>
          <SocialIcons>
            {socialLinks.map((social, index) => (
              <Link href={social.href} target="_blank" rel="noopener noreferrer" key={index}>
                {social.icon}
              </Link>
            ))}
          </SocialIcons>
        </FooterColumn>

        <FooterColumn className="footer-logo">
          <img src={logo} alt="Logotip" loading="lazy" />
          <Typography variant="body2">
            © {new Date().getFullYear()} Atelie. Barcha huquqlar himoyalangan.
          </Typography>
        </FooterColumn>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;