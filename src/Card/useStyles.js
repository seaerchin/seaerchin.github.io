import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '288px',
    height: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: '10px',
  },
});

export default useStyles;
