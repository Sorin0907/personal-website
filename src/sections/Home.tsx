import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { t } from 'ttag';

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        color: 'primary.main',
        px: 2,
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', md: '4rem' },
          textShadow: '0 0 15px #0ff',
        }}
      >
        {t`Hi there, and welcome to my digital portfolio!`}
      </Typography>

      <Typography variant="h6" align="center" mt={2} color='secondary.main'>
        {t`Software Developer | Tech Enthusiast | Problem Solver`}
      </Typography>
      </motion.div>
    </Box>
  );
};

export default Home;
