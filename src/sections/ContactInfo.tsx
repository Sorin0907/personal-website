import React, { useRef, useState } from 'react';
import { Box, Typography, Grid, TextField, Button, IconButton, Link } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const ContactInfo: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const socialLinks = [
    { icon: <GitHub color="secondary" />, label: 'GitHub', link: 'https://github.com/Sorin0907' },
    { icon: <LinkedIn color="secondary" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/sorin-adamoiu/' },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your EmailJS credentials
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          setFormMessage('Your message was sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setFormMessage('Something went wrong. Please try again later.');
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        px: 2,
        bgcolor: 'grey.900',
        color: 'text.primary',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          textShadow: '0 0 10px #0ff',
        }}
      >
        Contact Me
      </Typography>

      {/* Contact Details */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
          <Link href="mailto:sorin.adamoiu@gmail.com" color="inherit" underline="hover">
            sorin.adamoiu@gmail.com
          </Link>
        </Typography>
        <Box>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'secondary.main',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Contact Form */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              variant="outlined"
              margin="normal"
              required
              sx={{
                input: { color: 'text.primary' },
                '& label': { color: 'text.secondary' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'text.secondary' },
                  '&:hover fieldset': { borderColor: 'primary.main' },
                  '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                },
              }}
            />
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              sx={{
                input: { color: 'text.primary' },
                '& label': { color: 'text.secondary' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'text.secondary' },
                  '&:hover fieldset': { borderColor: 'primary.main' },
                  '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                },
              }}
            />
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              required
              sx={{
                input: { color: 'text.primary' },
                '& label': { color: 'text.secondary' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'text.secondary' },
                  '&:hover fieldset': { borderColor: 'primary.main' },
                  '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              sx={{
                mt: 2,
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          {formMessage && (
            <Typography variant="body2" align="center" sx={{ mt: 2, color: 'primary.main' }}>
              {formMessage}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
