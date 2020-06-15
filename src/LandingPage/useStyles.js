import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainText: {
    fontSize: (props) => (props.isBig ? '144px' : '72px'),
    fontWeight: 'bolder',
  },
  subText: {
    fontSize: (props) => (props.isBig ? '72px' : '36px'),
    fontWeight: 'bolder',
  },
  description: {
    fontSize: '1.25rem',
  },
}));

export default useStyles;
