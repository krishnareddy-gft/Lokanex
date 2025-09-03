import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayers, FiZap } from 'react-icons/fi';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${props => props.theme.colors.background};
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(78, 205, 196, 0.05) 0%, transparent 50%);
  z-index: 1;
`;

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 2;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['4xl']};
  align-items: center;
  position: relative;
  z-index: 3;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
    text-align: center;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.primary};
  width: fit-content;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0 auto;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes['6xl']};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  line-height: 1.1;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: ${props => props.theme.fontSizes['5xl']};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const Highlight = styled.span`
  background: ${props => props.theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
  max-width: 500px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0 auto;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
  }
`;

const PrimaryButton = styled(motion.button)`
  background: ${props => props.theme.colors.gradientPrimary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  transition: ${props => props.theme.transitions.base};
  box-shadow: ${props => props.theme.shadows.glow};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glowStrong};
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: ${props => props.theme.colors.textPrimary};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FloatingCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  position: absolute;
  backdrop-filter: blur(20px);
`;

const CodeCard = styled(FloatingCard)`
  top: -20px;
  left: -20px;
  width: 200px;
`;

const ServiceCard = styled(FloatingCard)`
  top: 50px;
  right: -30px;
  width: 180px;
`;

const TechCard = styled(FloatingCard)`
  bottom: -30px;
  left: 50px;
  width: 160px;
`;

const CardTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const CardText = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
  line-height: 1.4;
`;

const CodeBlock = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.primary};
`;

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <BackgroundPattern />
      <GridPattern />
      
      <HeroContent>
        <HeroText>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FiZap />
            Innovative Startup
          </Badge>
          
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Building the Future of{' '}
            <Highlight>Digital Innovation</Highlight>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A dynamic startup providing cutting-edge IT services and development solutions. 
            We help fellow startups and businesses transform their ideas into powerful digital experiences.
          </Subtitle>
          
          <CTAButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <PrimaryButton
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <FiArrowRight />
            </PrimaryButton>
            
            <SecondaryButton
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </SecondaryButton>
          </CTAButtons>
        </HeroText>
        
        <HeroVisual>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <CodeCard
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <CardTitle>
                <FiCode />
                Web Development
              </CardTitle>
              <CardText>
                Modern, responsive websites built with cutting-edge technologies
              </CardText>
              <CodeBlock>
                {`const app = () => {
  return <div>Hello World</div>
}`}
              </CodeBlock>
            </CodeCard>
            
            <ServiceCard
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <CardTitle>
                <FiLayers />
                Cloud Solutions
              </CardTitle>
              <CardText>
                Scalable cloud infrastructure for your growing business needs
              </CardText>
            </ServiceCard>
            
            <TechCard
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <CardTitle>
                <FiZap />
                AI Integration
              </CardTitle>
              <CardText>
                Smart automation and AI-powered solutions
              </CardText>
            </TechCard>
          </motion.div>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
