import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const palette = {
  primary: {
    // pinkish-orange (brand colour)
    main: '#FE7235',
    '160': '#56250C',
    '140': '#8B3D16',
    '120': '#BF541F',
    '100': '#FE7235',
    '80': '#F58852',
    '60': '#F7A47B',
    '40': '#FAC0A3',
    '20': '#FCDCCC',
    '00': '#FEF8F5',
  },
  secondary: {
    // slate (brand colour)
    main: '#6DB5CB',
    '100': '#466974',
    '80': '#598F9F',
    '60': '#6DB5CB',
    '40': '#94C9D9',
    '20': '#BADCE6',
    '10': '#E1F0F4',
    '00': '#F3F7F9',
  },
  text: {
    primary: '#1E1A1A',
    secondary: '#324348',
    '100': '#324348',
    '80': '#5B676B',
    '60': '#848B8D',
    '40': '#ACB0B0',
    '20': '#D5D4D2',
    '10': '#EAE6E4',
  },
  charcoalGrey: {
    main: '#324348',
    '100': '#324348',
    '80': '#5B676B',
    '60': '#848B8D',
    '40': '#ACB0B0',
    '20': '#D5D4D2',
    '10': '#EAE6E4',
  },
  seaBlue: {
    main: '#006098',
    '80': '#367DAC',
    '20': '#CFDCE9',
    '10': '#E6EDF3',
  },
  sandstorm: {
    main: '#F6D44D',
  },
  platinumGrey: {
    main: '#E5E1E6',
    '40': '#F4F2F4',
    '10': '#FBFBFB',
  },
  codGrey: {
    '10': '#E8E8E8',
    '60': '#787676',
    '70': '#625F5F',
    '80': '#4B4848',
    '90': '#353131',
  },
  error: {
    main: '#D53924',
    '10': '#FBECEA',
  },
  success: {
    main: '#18988B',
    '10': '#E8F5F4',
  },
  info: {
    main: '#598F9F',
    '10': '#F3F7F9',
  },
  warning: {
    main: '#FAC0A3',
    '10': '#FEF8F5',
  },
};
const typography = {
  useNextVariants: true,
  h1: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1.15rem',
    lineHeight: '1.3rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  h2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.15rem',
    lineHeight: '1.3rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  h3: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  h4: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  h5: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  h6: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.95rem',
    lineHeight: '1',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  subtitle1: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.825rem',
    lineHeight: '1rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  subtitle2: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.825rem',
    lineHeight: '0.9rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  body1: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  body2: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: '0%',
    color: palette.text.primary,
  },
  caption: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.025em',
    color: palette.text.primary,
  },
  overline: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '0.65rem',
    lineHeight: '0.75rem',
    letterSpacing: '0.025em',
    color: palette.text.primary,
  },
  button: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: '0%',
    textTransform: 'uppercase',
  },
};

export default createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette,
  typography,
  zIndex: {
    modal: 2147483100 /* because of Intercom chat launcher */,
    snackbar: 2147483200,
    tooltip: 2147483300,
  },
  overrides: {
    MuiLink: {
      root: {
        textDecorationLine: 'underline',
        color: palette.text.primary,
      },
    },
    MuiFormLabel: {
      root: {
        ...typography.body1,
        color: palette.text['40'],
        paddingLeft: '2px',
        '&$focused': {
          color: palette.seaBlue.main,
        },
      },
    },
    MuiInputBase: {
      root: {
        ...typography.body1,
      },
      input: {
        height: 'auto',
        padding: '10px 0',
        margin: '0 2px',
      },
    },
    MuiInput: {
      underline: {
        '&&&&:hover:before': {
          borderBottom: `1px solid ${palette.text['70']}`,
          transition: 'none',
        },
        '&:before': {
          borderBottom: `1px solid ${palette.text['60']}`,
        },
        '&:after ': {
          borderBottom: `1px solid ${palette.seaBlue.main}`,
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: 'translate(0, 26px) scale(1)',
        color: palette.text['60'],
      },
      shrink: {
        ...typography.caption,
        color: palette.charcoalGrey['80'],
        transform: 'none',
      },
      animated: {
        transition: 'all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      },
    },
    MuiCheckbox: {
      root: {
        color: palette.text.primary,
      },
    },
    MuiRadio: {
      root: {
        padding: '8px',
        color: palette.text.primary,
      },
      colorPrimary: {
        '&:hover': {
          backgroundColor: fade(palette.seaBlue.main, 0.08),
        },
        '&$checked': {
          color: palette.seaBlue.main,
          '&:hover': {
            backgroundColor: fade(palette.seaBlue.main, 0.08),
          },
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        marginTop: '4px',
        minHeight: 'auto',
        paddingLeft: '2px',
        color: palette.charcoalGrey['80'],
      },
    },
    MuiButton: {
      root: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: 'none',
        boxShadow: 'none',
      },
      contained: {
        padding: '14px 16px',
        boxShadow: 'none',
      },
      containedPrimary: {
        color: 'white',
        transition: 'all .2s',
        '&:hover': {
          boxShadow: `0px 3px 0px ${palette.primary.main}40`,
          backgroundColor: `${palette.primary.main}`,
          transform: 'translateY(-1px)',
        },
        '&:active': {
          backgroundColor: `${palette.primary.main}E6`,
          boxShadow: `inset 0px 2px 0px ${palette.text.primary}1A`,
          transform: 'translateY(1px)',
        },
        '&:disabled': {
          backgroundColor: `${palette.primary.main}4D`,
          color: 'white',
        },
      },
      containedSecondary: {
        '&:hover': {
          boxShadow: `0px 3px 0px ${palette.secondary.main}40`,
          backgroundColor: `${palette.secondary.main}`,
          transform: 'translateY(-1px)',
        },
      },
      outlined: {
        padding: '14px 24px',
      },
      outlinedPrimary: {
        border: `1px solid ${palette.primary.main}`,
        color: `${palette.primary.main}`,
        '&:hover': {
          color: 'white',
          backgroundColor: `${palette.primary.main} !important`,
        },
        '&:disabled': {
          border: `1px solid ${palette.primary.main}4D`,
          color: `${palette.primary.main}80`,
        },
      },
      text: {
        padding: '14px 24px',
        color: palette.text.primary,
        '&:disabled': {
          backgroundColor: `${palette.charcoalGrey['40']}`,
          color: 'white',
        },
      },
      textPrimary: {
        color: `${palette.primary.main}`,
      },
      sizeSmall: {
        fontSize: '14px',
        padding: '8px 20px',
        minWidth: '133px',
      },
      sizeLarge: {
        padding: '14px 45px',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: `0 0 8px ${palette.text.primary}14`,
      },
    },
    MuiChip: {
      root: {
        height: '28px',
        margin: '4px 2px',
        borderRadius: '2px',
        backgroundColor: '#E6EDF3',
      },
      label: {
        ...typography.body2,
        color: palette.text.primary,
        paddingLeft: '4px',
        paddingRight: '4px',
      },
      labelSmall: {
        ...typography.overline,
        color: palette.text.secondary,
        paddingLeft: '4px',
        paddingRight: '4px',
      },
      deleteIcon: {
        color: palette.text.primary,
        padding: '4px',
        marginLeft: '4px',
        marginRight: '4px',
      },
    },
    MuiSnackbar: {
      anchorOriginTopCenter: {
        '@media (max-width: 1023px)': {
          top: '64px',
        },
        '@media (min-width: 1024px)': {
          top: '78px',
        },
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: 'white',
        color: palette.text.primary,
        minHeight: '48px',
      },
      message: {
        padding: 0,
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: '560px',
        width: '100%',
      },
      paperWidthMd: {
        maxWidth: '856px',
        width: '100%',
      },
      paperScrollPaper: {
        maxHeight: 'calc(100% - 80px)',
        margin: '2vmin',
      },
    },
    MuiDialogContent: {
      dividers: {
        boxShadow: `inset 0 0 4px 0 ${palette.text.primary}14`,
        borderTop: 'none',
        borderBottom: 'none',
      },
    },
    MuiDialogActions: {
      root: {
        padding: '8px 16px',
        '@media (min-width: 1024px)': {
          padding: '16px 24px',
        },
        '& > button': {
          borderRadius: '4px',
          padding: '14px 8px',
          minWidth: '64px',
          color: palette.primary.main,
        },
      },
      spacing: {
        '& > * + *': {
          '@media (min-width: 1024px)': {
            marginLeft: '16px',
          },
        },
      },
    },
    MuiAlert: {
      standardSuccess: {
        color: palette.success.main,
      },
      standardInfo: {
        color: palette.seaBlue.main,
      },
      standardError: {
        color: palette.error.main,
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
  dimensions: {
    appBarWebHeight: '70px',
    appBarMobileHeight: '60px',
  },
});
