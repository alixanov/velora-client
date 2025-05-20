import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Phone, Telegram, LocationOn, Instagram, YouTube } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoooooo.png';

const FooterSection = styled.footer`
  padding: 4rem 2rem;
  background: linear-gradient(180deg, #d81b60 0%, #f06292 100%);
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(217, 26, 96, 0.3);
  }

  &.footer-logo {
    img {
      max-width: 150px;
      height: auto;
      margin-bottom: 0.75rem;
      filter: drop-shadow(0 0 8px rgba(217, 26, 96, 0.5));
      animation: fadeInLogo 1s ease-in-out;
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

  @keyframes fadeInLogo {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const FooterTitle = styled(Typography)`
  font-size: 2.6rem !important;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #ff4081);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem !important;
  letter-spacing: 0.5px;
  animation: fadeIn 0.8s ease-out;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }

  @keyframes fadeIn {
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

  svg {
    color: #fff;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }

  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
    svg {
      font-size: 1rem;
    }
  }

  @media (max-width: 400px) {
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
      padding: 6px;
      background: linear-gradient(45deg, #d81b60, #ff4081);
    }

    &:hover svg {
      transform: scale(1.2) rotate(10deg);
      color: #fff;
      background: linear-gradient(45deg, #f06292, #ff4081);
    }
  }

  @media (max-width: 600px) {
    gap: 1rem;
    svg {
      width: 24px;
      height: 24px;
      padding: 5px;
    }
  }

  @media (max-width: 400px) {
    gap: 0.75rem;
    svg {
      width: 20px;
      height: 20px;
      padding: 4px;
    }
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  const usefulLinks = [
    { id: 'bosh-sahifa', text: 'Bosh sahifa', path: '/' },
    { id: 'services', text: 'Xizmatlar', path: '/#services' },
    { id: 'order', text: 'Buyurtma berish', path: '/#order' },
    { id: 'gallery', text: 'Galereya', path: '/#gallery' },
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

  const handleLinkClick = (path) => {
    if (path === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionId = path.split('#')[1];
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/');
          setTimeout(() => {
            const retryElement = document.getElementById(sectionId);
            if (retryElement) {
              retryElement.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    }
  };

  return (
    <FooterSection>
      <FooterContainer>
        <FooterColumn>
          <FooterTitle variant="h3">Foydali havolalar</FooterTitle>
          <FooterList>
            {usefulLinks.map((link) => (
              <FooterListItem key={link.id}>
                <MuiLink
                  component="button"
                  onClick={() => handleLinkClick(link.path)}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    fontWeight: 500,
                    fontFamily: '"Lora", serif',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ffcadd',
                      transform: 'scale(1.05)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      width: '0',
                      height: '2px',
                      background: 'linear-gradient(45deg, #d81b60, #ffcadd)',
                      transition: 'width 0.3s ease, left 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                      left: '0',
                    },
                  }}
                >
                  {link.text}
                </MuiLink>
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
                <MuiLink
                  href={info.href}
                  target={info.target || '_self'}
                  rel={info.target ? 'noopener noreferrer' : undefined}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    fontWeight: 500,
                    fontFamily: '"Lora", serif',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ffcadd',
                      transform: 'scale(1.05)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      width: '0',
                      height: '2px',
                      background: 'linear-gradient(45deg, #d81b60, #ffcadd)',
                      transition: 'width 0.3s ease, left 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                      left: '0',
                    },
                  }}
                >
                  {info.text}
                </MuiLink>
              </FooterListItem>
            ))}
          </FooterList>
          <SocialIcons>
            {socialLinks.map((social, index) => (
              <MuiLink href={social.href} target="_blank" rel="noopener noreferrer" key={index}>
                {social.icon}
              </MuiLink>
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