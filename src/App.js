import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textPrimary};
  font-family: ${props => props.theme.fonts.primary};
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
