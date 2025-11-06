
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const getTheme = (mode = 'dark') => {
  let theme = createTheme({
    cssVariables: true,
    palette: {
      mode,
      primary: { main: '#41c9e2' },
      secondary: { main: '#8ef0d4' },
      background: { default: '#0b1324', paper: 'rgba(12, 22, 40, 0.65)' },
      text: { primary: '#e8f5ff', secondary: 'rgba(232,245,255,0.80)' }
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans'`,
      h1: { fontWeight: 800, letterSpacing: -0.5 },
      h2: { fontWeight: 700, letterSpacing: -0.25 },
      h3: { fontWeight: 700 },
      button: { textTransform: 'none', fontWeight: 600 }
    },
    components: {
      MuiContainer: { styleOverrides: { root: { paddingLeft: 16, paddingRight: 16 } } },
      MuiPaper: { styleOverrides: { root: {
        backdropFilter: 'saturate(140%) blur(14px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 10px 30px rgba(2, 43, 96, 0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}},
      MuiCard: { styleOverrides: { root: {
        background: 'linear-gradient(180deg, rgba(15,25,40,0.65), rgba(15,25,40,0.45))',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
      }}},
      MuiButton: { styleOverrides: { root: {
        backdropFilter: 'blur(6px)',
        boxShadow: '0 10px 20px rgba(0, 150, 200, 0.25)',
      }}},
    }
  });
  return responsiveFontSizes(theme);
};
