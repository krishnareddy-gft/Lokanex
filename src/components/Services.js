import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiCloud, 
  FiSmartphone, 
  FiShield, 
  FiDatabase, 
  FiZap,
  FiArrowRight,
  FiCheck
} from 'react-icons/fi';

const ServicesContainer = styled.section`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
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
    radial-gradient(circle at 70% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
  z-index: 1;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['4xl']};
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
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.lg} 0;
  line-height: 1.2;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['4xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xl};
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  position: relative;
  overflow: hidden;
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || props.theme.colors.gradientPrimary};
    opacity: 0;
    transition: ${props => props.theme.transitions.base};
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.gradient || props.theme.colors.gradientPrimary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const ServiceTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.md} 0;
`;

const ServiceDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0 0 ${props => props.theme.spacing.lg} 0;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${props => props.theme.spacing.lg} 0;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ServiceCTA = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    transform: translateX(4px);
  }
`;

const CTA = styled(motion.div)`
  text-align: center;
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['3xl']};
  position: relative;
  overflow: hidden;
`;

const CTATitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.lg} 0;
`;

const CTAText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0 0 ${props => props.theme.spacing['2xl']} 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background: ${props => props.theme.colors.gradientPrimary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  transition: ${props => props.theme.transitions.base};
  box-shadow: ${props => props.theme.shadows.glow};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glowStrong};
  }
`;

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'Performance Optimization'],
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)'
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your business.',
      features: ['AWS & Azure', 'DevOps & CI/CD', 'Microservices', 'Auto-scaling'],
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)'
    },
    {
      icon: <FiShield />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: <FiDatabase />,
      title: 'Data Solutions',
      description: 'Data analytics, management, and business intelligence solutions.',
      features: ['Data Analytics', 'Machine Learning', 'Database Design', 'Business Intelligence'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: <FiZap />,
      title: 'AI Integration',
      description: 'Artificial intelligence and automation solutions for modern businesses.',
      features: ['AI Chatbots', 'Process Automation', 'Predictive Analytics', 'Computer Vision'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ServicesContainer id="services">
      <BackgroundPattern />
      
      <ServicesContent>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FiZap />
            Our Services
          </SectionBadge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive IT Solutions
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            From concept to deployment, we provide end-to-end technology solutions 
            that drive your business forward.
          </SectionSubtitle>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              gradient={service.gradient}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ServiceIcon gradient={service.gradient}>
                {service.icon}
              </ServiceIcon>
              
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>
                    <FiCheck size={16} color="#00d4ff" />
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
              
              <ServiceCTA>
                Learn More
                <FiArrowRight size={14} />
              </ServiceCTA>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <CTA
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Transform Your Business?</CTATitle>
          <CTAText>
            Let's discuss how our IT solutions can help you achieve your goals 
            and drive innovation in your industry.
          </CTAText>
          <CTAButton
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <FiArrowRight />
          </CTAButton>
        </CTA>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;
