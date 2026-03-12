import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Poppins', 'Noto Sans JP', sans-serif",
    body: "'Noto Sans JP', 'Poppins', sans-serif",
  },
  colors: {
    brand: {
      50: '#f0e6ff',
      100: '#d1b3ff',
      200: '#b380ff',
      300: '#944dff',
      400: '#7519ff',
      500: '#667eea',
      600: '#5a67d8',
      700: '#4c51bf',
      800: '#434190',
      900: '#1a1a2e',
    },
    dark: {
      bg: '#0f0f1a',
      card: '#1a1a2e',
      cardHover: '#252545',
      border: 'rgba(102, 126, 234, 0.2)',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#0f0f1a',
        color: '#e0e0e0',
      },
    },
  },
});

export default theme;
