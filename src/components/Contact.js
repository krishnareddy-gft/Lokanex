import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiCheckCircle,
  FiUser,
  FiMessageSquare,
  FiGlobe
} from 'react-icons/fi';

const ContactContainer = styled.section`
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
    radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
  z-index: 1;
`;

const ContactContent = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['4xl']};
  margin-bottom: ${props => props.theme.spacing['4xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing['2xl']};
`;

const InfoCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const InfoIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.gradientPrimary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.xl};
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
`;

const InfoText = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
  line-height: 1.5;
`;

const ContactForm = styled(motion.form)`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['3xl']};
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

const FormTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.lg} 0;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const FormInput = styled.input`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textPrimary};
  transition: ${props => props.theme.transitions.base};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`;

const FormTextarea = styled.textarea`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textPrimary};
  min-height: 120px;
  resize: vertical;
  font-family: ${props => props.theme.fonts.primary};
  transition: ${props => props.theme.transitions.base};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`;

const FormButton = styled(motion.button)`
  background: ${props => props.theme.colors.gradientPrimary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  transition: ${props => props.theme.transitions.base};
  box-shadow: ${props => props.theme.shadows.glow};
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glowStrong};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.success};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.success};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-top: ${props => props.theme.spacing.lg};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      text: 'admin@lokanex.com\ninfo@lokanex.com'
    },
    {
      icon: <FiGlobe />,
      title: 'Website',
      text: 'www.lokanex.com\nFollow us on social media'
    }
  ];

  return (
    <ContactContainer id="contact">
      <BackgroundPattern />
      
      <ContactContent>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FiMail />
            Get In Touch
          </SectionBadge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </SectionSubtitle>
        </SectionHeader>
        
        <ContactGrid>
          <ContactInfo>
            {contactInfo.map((info, index) => (
              <InfoCard
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <InfoIcon>{info.icon}</InfoIcon>
                <InfoContent>
                  <InfoTitle>{info.title}</InfoTitle>
                  <InfoText>{info.text}</InfoText>
                </InfoContent>
              </InfoCard>
            ))}
          </ContactInfo>
          
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FormTitle>Send us a Message</FormTitle>
            
            <FormGrid>
              <FormGroup>
                <FormLabel>
                  <FiUser />
                  Full Name
                </FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>
                  <FiMail />
                  Email Address
                </FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </FormGroup>
            </FormGrid>
            
            <FormGroup>
              <FormLabel>
                <FiGlobe />
                Company (Optional)
              </FormLabel>
              <FormInput
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter your company name"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>
                <FiMessageSquare />
                Message
              </FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project or requirements..."
                required
              />
            </FormGroup>
            
            <FormButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FiSend />
                  </motion.div>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </FormButton>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiCheckCircle />
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </SuccessMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
