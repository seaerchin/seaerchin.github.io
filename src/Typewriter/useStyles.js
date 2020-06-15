import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Typewritercursor: {
    WebkitAnimation: 'Typewriter-cursor 1s infinite',
    animation: 'Typewriter-cursor 1s infinite',
    marginLeft: '1px',
    color: 'white',
  },
  '@-webkit-keyframes Typewriter-cursor': {
    '0%': {
      opacity: 0,
    },

    '50%': {
      opacity: 1,
    },

    '100%': {
      opacity: 0,
    },
  },

  '@keyframes Typewriter-cursor': {
    '0%': {
      opacity: 0,
    },

    '50%': {
      opacity: 1,
    },

    '100%': {
      opacity: 0,
    },
  },
}));

export default useStyles;
