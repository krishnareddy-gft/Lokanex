import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LokanexLogo from './Logo';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub, 
  FiTwitter, 
  FiLinkedin, 
  FiInstagram,
  FiArrowUp,
  FiExternalLink
} from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.backgroundSecondary};
  border-top: 1px solid ${props => props.theme.colors.border};
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.03) 0%, transparent 50%);
  z-index: 1;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  position: relative;
  z-index: 2;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  margin-bottom: ${props => props.theme.spacing['3xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xl};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const CompanyDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const SectionTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const FooterLink = styled(motion.a)`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.base};
  transition: ${props => props.theme.transitions.base};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateX(4px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.base};
`;

const ContactIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${props => props.theme.colors.border};
  padding-top: ${props => props.theme.spacing['2xl']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textMuted};
  margin: 0;
`;

const BackToTop = styled(motion.button)`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.full};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Development', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'AI Integration', href: '#services' },
    { label: 'Cybersecurity', href: '#services' }
  ];

  const company = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const resources = [
    { label: 'Documentation', href: '#', external: true }
  ];

  return (
    <FooterContainer>
      <BackgroundPattern />
      
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <CompanyInfo>
              <LokanexLogo size="large" />
              <CompanyDescription>
                Lokanex is an innovative startup providing cutting-edge technology solutions 
                for businesses worldwide. We help organizations transform their digital 
                presence and achieve their goals through agile, cost-effective solutions.
              </CompanyDescription>
              <SocialLinks>
                <SocialLink
                  href="https://github.com/lokanex"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub />
                </SocialLink>
                <SocialLink
                  href="https://twitter.com/lokanex"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiTwitter />
                </SocialLink>
                <SocialLink
                  href="https://linkedin.com/company/lokanex"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin />
                </SocialLink>
                <SocialLink
                  href="https://instagram.com/lokanex"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiInstagram />
                </SocialLink>
              </SocialLinks>
            </CompanyInfo>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Services</SectionTitle>
            <FooterLinks>
              {services.map((service, index) => (
                <FooterLink
                  key={index}
                  href={service.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(service.href);
                  }}
                  whileHover={{ x: 4 }}
                >
                  {service.label}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Company</SectionTitle>
            <FooterLinks>
              {company.map((item, index) => (
                <FooterLink
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Contact Info</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <FiMail />
                </ContactIcon>
                admin@lokanex.com
              </ContactItem>
            </ContactInfo>
            
            <SectionTitle style={{ marginTop: '2rem' }}>Resources</SectionTitle>
            <FooterLinks>
              {resources.map((resource, index) => (
                <FooterLink
                  key={index}
                  href={resource.href}
                  target={resource.external ? '_blank' : '_self'}
                  rel={resource.external ? 'noopener noreferrer' : ''}
                  whileHover={{ x: 4 }}
                >
                  {resource.label}
                  {resource.external && <FiExternalLink size={12} />}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>
            © 2024 Lokanex. All rights reserved. | Privacy Policy | Terms of Service
          </Copyright>
          
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp />
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
