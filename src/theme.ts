import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
    primary: {
      main: '#0ff', // Neon cyan
    },
    secondary: {
      main: '#f50057', // Neon pink
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Slightly lighter dark
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#0ff', // Neon cyan for secondary text
    },
  },
  typography: {
    fontFamily: `'Roboto Mono', monospace`, // A futuristic mono font
    h1: { color: '#0ff' }, // Neon cyan headings
    h2: { color: '#0ff' },
    h4: { color: '#0ff' },
    body1: { color: '#ffffff' }, // White body text
    body2: { color: '#b0bec5' }, // Muted text for secondary content
  },
});

export default theme;
