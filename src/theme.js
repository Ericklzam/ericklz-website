import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    // Add any other customizations for dark mode, such as background and text colors
  },
  typography: {
    fontFamily: [
      'Space Grotesk'
    ].join(','),
    lineHeight: 1.5,
    paragraphSpacing: '2em',
    color: '#ffffff',
  }
});

export default darkTheme;