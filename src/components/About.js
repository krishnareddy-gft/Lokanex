import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiUsers, 
  FiAward, 
  FiTrendingUp
} from 'react-icons/fi';

const AboutContainer = styled.section`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.background};
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
    radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
  z-index: 1;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  position: relative;
  z-index: 2;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['4xl']};
  align-items: center;
  margin-bottom: ${props => props.theme.spacing['4xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const SectionBadge = styled(motion.div)`
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
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

const AboutDescription = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0;
`;

const ValuesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const ValueItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateX(8px);
  }
`;

const ValueIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.gradientPrimary};
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.lg};
  flex-shrink: 0;
`;

const ValueContent = styled.div`
  flex: 1;
`;

const ValueTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.xs} 0;
`;

const ValueDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
  line-height: 1.5;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-top: ${props => props.theme.spacing['4xl']};
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing['2xl']};
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || props.theme.colors.gradientPrimary};
  }
`;

const StatNumber = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  background: ${props => props.gradient || props.theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.textSecondary};
`;

const MissionSection = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['3xl']};
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.colors.gradientPrimary};
  }
`;

const MissionTitle = styled(motion.h3)`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.lg} 0;
`;

const MissionText = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  const values = [
    {
      icon: <FiTarget />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: <FiUsers />,
      title: 'Startup-Friendly',
      description: 'We understand startup challenges and build lasting partnerships.'
    },
    {
      icon: <FiAward />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project we deliver.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Scalable Solutions',
      description: 'Our solutions grow with your business needs and ambitions.'
    }
  ];

  const stats = [
    {
      number: '6+',
      label: 'Projects Completed',
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)'
    },
    {
      number: '25+',
      label: 'Happy Clients',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)'
    },
    {
      number: '2+',
      label: 'Years as Startup',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)'
    },
    {
      number: '99%',
      label: 'Client Satisfaction',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ];

  return (
    <AboutContainer id="about">
      <BackgroundPattern />
      
      <AboutContent>
        <AboutGrid>
          <AboutText>
            <SectionBadge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FiUsers />
              About Lokanex
            </SectionBadge>
            
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Empowering Digital Transformation
            </SectionTitle>
            
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              We are a dynamic startup dedicated to delivering innovative technology solutions 
              that drive business growth and digital transformation.
            </SectionSubtitle>
            
            <AboutDescription
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              As a startup, Lokanex combines fresh perspectives with technical expertise to help 
              businesses navigate the digital landscape. Our agile team of developers, 
              designers, and strategists work together to create innovative solutions that not only 
              meet your current needs but also scale with your growth.
            </AboutDescription>
          </AboutText>
          
          <ValuesList
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <ValueItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueContent>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueContent>
              </ValueItem>
            ))}
          </ValuesList>
        </AboutGrid>
        
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              gradient={stat.gradient}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <StatNumber gradient={stat.gradient}>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
        
        <MissionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText>
            As a startup, we bridge the gap between innovative technology and business success by 
            delivering scalable, secure, and user-centric solutions that empower 
            organizations to thrive in the digital age. We believe in the power of 
            technology to transform businesses and create meaningful impact through agile, 
            cost-effective solutions.
          </MissionText>
        </MissionSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
