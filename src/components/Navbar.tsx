import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const navLinks = ['Home', 'About', 'Education', 'Employment', 'Projects', 'Contact'];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: '#1e1e1e',
          boxShadow: '0 0 20px #0ff',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: '#0ff',
              textShadow: '0 0 10px #0ff',
            }}
          >
            Sorin Adamoiu
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Button
                key={link}
                color="inherit"
                onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                sx={{
                  color: '#0ff',
                  '&:hover': {
                    textShadow: '0 0 10px #0ff',
                  },
                }}
              >
                {link}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: '#0ff' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: '#121212',
            color: '#fff',
          },
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link} disablePadding>
              <ListItemButton onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}>
                <ListItemText
                  primary={link}
                  sx={{
                    textAlign: 'center',
                    color: '#0ff',
                    '&:hover': { textShadow: '0 0 10px #0ff' },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
