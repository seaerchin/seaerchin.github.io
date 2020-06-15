import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  parent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
  },
  avatar: {
    background: '#D4F5FF',
  },
  relativeParent: {
    display: 'flex',
    alignSelf: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  centeredChild: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  rightChild: {
    marginLeft: 'auto',
  },
  autoChild: {
    flex: 'auto',
  },
}));

export default useStyles;
