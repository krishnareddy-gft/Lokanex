import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LokanexIcon } from '../assets/Lokanexlogo.svg';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  cursor: pointer;
  padding: 8px;
  border-radius: 12px;
`;

const LogoIcon = styled.div`
  width: ${props => props.size === 'large' ? '48px' : props.size === 'medium' ? '36px' : '28px'};
  height: ${props => props.size === 'large' ? '48px' : props.size === 'medium' ? '36px' : '28px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  font-family: ${props => props.theme.fonts.logo};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  font-size: ${props => props.size === 'large' ? props.theme.fontSizes['3xl'] : 
                        props.size === 'medium' ? props.theme.fontSizes['2xl'] : 
                        props.theme.fontSizes.xl};
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #4ecdc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.08em;
  text-transform: none;
  font-stretch: condensed;
`;

const LokanexLogo = ({ size = 'medium', showText = true, ...props }) => {
  return (
    <LogoContainer {...props}>
      <LogoIcon size={size}>
        <LokanexIcon 
          width="100%" 
          height="100%"
        />
      </LogoIcon>
      {showText && <LogoText size={size}>Lokanex</LogoText>}
    </LogoContainer>
  );
};

export default LokanexLogo;
