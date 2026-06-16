import { createTheme } from '@mui/material/styles';

/**
 * Pulse design tokens — dark, mono-violet theme inspired by the book cover.
 * "A quiet control panel at night."
 */

const VIOLET = '#8B5CF6';
const VIOLET_BRIGHT = '#A855F7';
const BORDER_VIOLET = 'rgba(139,92,246,0.22)';
const GLOW_VIOLET = 'rgba(168,85,247,0.30)';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0A0F',
      paper: '#14141C',
    },
    primary: {
      main: VIOLET,
      light: VIOLET_BRIGHT,
    },
    text: {
      primary: '#F5F5FA',
      secondary: '#8E8EA0',
    },
    divider: BORDER_VIOLET,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    },
    subtitle1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.06em',
    },
    button: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.08em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0A0A0F',
          // Subtle circuit-grid background
          backgroundImage: `
            linear-gradient(${BORDER_VIOLET} 1px, transparent 1px),
            linear-gradient(90deg, ${BORDER_VIOLET} 1px, transparent 1px),
            radial-gradient(ellipse at 0% 100%, ${GLOW_VIOLET} 0%, transparent 50%)
          `,
          backgroundSize: '60px 60px, 60px 60px, 100% 100%',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#14141C',
          border: `1px solid ${BORDER_VIOLET}`,
          borderRadius: 12,
          boxShadow: '0 0 24px rgba(168,85,247,0.12)',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 32px rgba(168,85,247,0.20)',
            borderColor: 'rgba(139,92,246,0.40)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        },
        contained: {
          boxShadow: '0 0 16px rgba(168,85,247,0.20)',
          '&:hover': {
            boxShadow: '0 0 24px rgba(168,85,247,0.35)',
          },
        },
        outlined: {
          borderColor: BORDER_VIOLET,
          '&:hover': {
            borderColor: VIOLET,
            backgroundColor: 'rgba(139,92,246,0.08)',
          },
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: '#14141C',
          borderTop: `1px solid ${BORDER_VIOLET}`,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: '#8E8EA0',
          '&.Mui-selected': {
            color: VIOLET_BRIGHT,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 600,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: '#8E8EA0',
          '&.Mui-selected': {
            color: VIOLET_BRIGHT,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: VIOLET_BRIGHT,
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: BORDER_VIOLET,
            },
            '&:hover fieldset': {
              borderColor: VIOLET,
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1C1B27',
          border: `1px solid ${BORDER_VIOLET}`,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#1C1B27',
          border: `1px solid ${BORDER_VIOLET}`,
          color: '#F5F5FA',
        },
      },
    },
  },
});

// Export design tokens for use in components (e.g. Recharts)
export const tokens = {
  violet: VIOLET,
  violetBright: VIOLET_BRIGHT,
  borderViolet: BORDER_VIOLET,
  glowViolet: GLOW_VIOLET,
  surfaceRaised: '#1C1B27',
  chartGrid: 'rgba(255,255,255,0.05)',
  chartGradientStart: 'rgba(168,85,247,0.35)',
  chartGradientEnd: 'rgba(168,85,247,0)',
};

export default theme;
