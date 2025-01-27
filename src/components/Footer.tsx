import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, X } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        py: 4,
        textAlign: 'center',
        bgcolor: 'background.paper',
        color: 'primary.main',
        borderTop: '2px solid #0ff',
      }}
    >
      <Typography variant="body1" sx={{ textShadow: '0 0 10px #0ff' }}>
        Connect with me:
      </Typography>
      <IconButton
        href="https://github.com/Sorin0907"
        target="_blank"
        sx={{
          color: 'primary.main',
          '&:hover': {
            textShadow: '0 0 10px #0ff',
          },
        }}
      >
        <GitHub />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/sorin-adamoiu/"
        target="_blank"
        sx={{
          color: 'primary.main',
          '&:hover': {
            textShadow: '0 0 10px #0ff',
          },
        }}
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="https://x.com/SAdamoiu"
        target="_blank"
        sx={{
          color: 'primary.main',
          '&:hover': {
            textShadow: '0 0 10px #0ff',
          },
        }}
      >
        <X />
      </IconButton>
      <Typography variant="caption" display="block" mt={2} sx={{ color: 'text.secondary' }}>
        © {new Date().getFullYear()} My Portfolio
      </Typography>
    </Box>
  );
};

export default Footer;
