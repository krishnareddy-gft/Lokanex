import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiExternalLink, 
  FiGithub, 
  FiCode, 
  FiLayers,
  FiSmartphone,
  FiCloud,
  FiZap,
  FiArrowRight
} from 'react-icons/fi';

const PortfolioContainer = styled.section`
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
    radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
  z-index: 1;
`;

const PortfolioContent = styled.div`
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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing['3xl']};
  flex-wrap: wrap;
`;

const FilterTab = styled(motion.button)`
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.background : props.theme.colors.textSecondary};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['4xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  position: relative;
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${props => props.gradient || props.theme.colors.gradientPrimary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProjectIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.background};
  opacity: 0.8;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  opacity: 0;
  transition: ${props => props.theme.transitions.base};
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.background};
  text-decoration: none;
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    transform: scale(1.1);
    background: ${props => props.theme.colors.primaryLight};
  }
`;

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing['2xl']};
`;

const ProjectCategory = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.md} 0;
`;

const ProjectDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0 0 ${props => props.theme.spacing.lg} 0;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textSecondary};
`;

const ProjectCTA = styled.button`
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

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and analytics dashboard.',
      category: 'Web Development',
      icon: <FiLayers />,
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'web'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, transaction management, and real-time notifications.',
      category: 'Mobile Development',
      icon: <FiSmartphone />,
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
      tech: ['React Native', 'Firebase', 'Biometric Auth'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'mobile'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure setup with automated deployment, monitoring, and disaster recovery solutions.',
      category: 'Cloud Solutions',
      icon: <FiCloud />,
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'cloud'
    },
    {
      id: 4,
      title: 'AI Chatbot System',
      description: 'Intelligent chatbot system with natural language processing, sentiment analysis, and multi-language support.',
      category: 'AI Integration',
      icon: <FiZap />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tech: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'ai'
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      description: 'Comprehensive SaaS dashboard with user management, analytics, billing, and real-time data visualization.',
      category: 'Web Development',
      icon: <FiCode />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'web'
    },
    {
      id: 6,
      title: 'IoT Monitoring System',
      description: 'Real-time IoT device monitoring system with data collection, analysis, and alert management.',
      category: 'Cloud Solutions',
      icon: <FiCloud />,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tech: ['React', 'Node.js', 'MQTT', 'InfluxDB'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'cloud'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Development' },
    { key: 'cloud', label: 'Cloud Solutions' },
    { key: 'ai', label: 'AI Integration' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PortfolioContainer id="portfolio">
      <BackgroundPattern />
      
      <PortfolioContent>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FiCode />
            Our Portfolio
          </SectionBadge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Showcasing Our Best Work
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of successful projects that demonstrate our 
            expertise in delivering innovative technology solutions.
          </SectionSubtitle>
        </SectionHeader>
        
        <FilterTabs>
          {filters.map((filter) => (
            <FilterTab
              key={filter.key}
              active={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </FilterTab>
          ))}
        </FilterTabs>
        
        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage gradient={project.gradient}>
                  <ProjectIcon>{project.icon}</ProjectIcon>
                  <ProjectOverlay>
                    <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </ProjectLink>
                    <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </ProjectLink>
                  </ProjectOverlay>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectCategory>
                    {project.icon}
                    {project.category}
                  </ProjectCategory>
                  
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectTech>
                    {project.tech.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                  
                  <ProjectCTA>
                    View Details
                    <FiArrowRight size={14} />
                  </ProjectCTA>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
        
        <CTA
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Start Your Project?</CTATitle>
          <CTAText>
            Let's discuss your ideas and create something amazing together. 
            Our team is ready to bring your vision to life.
          </CTAText>
          <CTAButton
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <FiArrowRight />
          </CTAButton>
        </CTA>
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
