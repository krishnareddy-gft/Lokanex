import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LokanexLogo from './Logo';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled 
    ? 'rgba(10, 10, 10, 0.85)' 
    : 'rgba(10, 10, 10, 0.1)'};
  backdrop-filter: ${props => props.scrolled ? 'blur(25px) saturate(180%)' : 'blur(10px)'};
  border-bottom: ${props => props.scrolled 
    ? `1px solid rgba(0, 212, 255, 0.2)` 
    : '1px solid transparent'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.scrolled 
    ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 212, 255, 0.1)' 
    : 'none'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.scrolled 
      ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%)'
      : 'transparent'};
    opacity: ${props => props.scrolled ? 1 : 0};
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing['2xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.base};
  position: relative;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(0, 212, 255, 0.05);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 212, 255, 0.15);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.gradientPrimary};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
  }
  
  &:hover::after {
    width: 80%;
  }
`;

const CTAButton = styled.button`
  background: ${props => props.theme.colors.gradientPrimary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 212, 255, 0.2);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(0, 212, 255, 0.2);
    border-color: rgba(0, 212, 255, 0.4);
    transform: scale(1.05);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(25px) saturate(180%);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing['2xl']};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%);
    opacity: 0.5;
    pointer-events: none;
  }
`;

const MobileNavLink = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.xl};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(0, 212, 255, 0.1);
    transform: scale(1.05);
  }
`;

const MobileCTAButton = styled.button`
  background: ${props => props.theme.colors.gradientPrimary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  transition: ${props => props.theme.transitions.base};
  box-shadow: ${props => props.theme.shadows.glow};
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${props => props.theme.spacing.lg};
  right: ${props => props.theme.spacing.lg};
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  
  &:hover {
    background: rgba(255, 107, 53, 0.2);
    border-color: rgba(255, 107, 53, 0.4);
    transform: scale(1.05);
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <HeaderContent>
          <LokanexLogo size="medium" />
          
          <Nav>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>
          
          <CTAButton
            onClick={() => scrollToSection('#contact')}
          >
            Get Started
          </CTAButton>
          
          <MobileMenuButton 
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu />
          </MobileMenuButton>
        </HeaderContent>
      </HeaderContainer>

      {mobileMenuOpen && (
        <MobileMenu>
            <CloseButton 
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiX />
            </CloseButton>
            
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </MobileNavLink>
            ))}
            
            <MobileCTAButton
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
            </MobileCTAButton>
        </MobileMenu>
      )}
    </>
  );
};

export default Header;
