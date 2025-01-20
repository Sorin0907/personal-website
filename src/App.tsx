import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import EmploymentHistory from './sections/EmploymentHistory';
import Projects from './sections/Projects';
import Footer from './components/Footer';
import Education from './sections/Education';
import ContactInfo from './sections/ContactInfo';

const App: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          px: 1,
          pb: 4,
        }}
      >
        <Home />
        <AboutMe />
        <Education />
        <EmploymentHistory />
        <Projects />
        <ContactInfo />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
