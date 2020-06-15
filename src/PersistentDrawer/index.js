import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { makeHackerText } from '../utils.js';
import SocialBar from '../SocialBar/index';

const PersistentDrawerLeft = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(-1);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const hasPadding = window.innerWidth > 768;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} style={{ position: 'absolute', top: '0px' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setSelected(-1)}>
            <Typography variant="h1" noWrap>
              Hey There!
            </Typography>
          </Link>
          <Avatar
            variant="square"
            className={classes.square}
            style={{
              position: 'absolute',
              right: '0px',
              background: 'rgb(25,25,25)',
              height: '100%',
              width: `${window.innerWidth > 900 ? '64px' : '48px'}`,
            }}
          >
            <a href="mailto:jer005@ntu.edu.sg" style={{ textDecoration: 'none' }}>
              {makeHackerText(true)('holla')}
            </a>
          </Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        PaperProps={{ elevation: 3 }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['About Me', 'Projects', 'Experiences', 'Fun Stuff'].map((text, index) => (
            <Link to={`/${text}`} style={{ textDecoration: 'none' }}>
              <ListItem button onClick={() => setSelected(index)}>
                <ListItemText inset={hasPadding}>
                  {selected === index ? (
                    <Typography style={{ fontFamily: 'monospace', color: 'orange', fontSize: '1.05rem' }}>
                      {text}
                    </Typography>
                  ) : (
                    <Typography variant="body1">{text}</Typography>
                  )}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List style={{ justifyContent: 'flex-end' }}>
          <ListItem style={{ justifyContent: 'center' }}>
            <Typography variant="h5">{'Say Hi'}</Typography>
          </ListItem>
          <ListItem>
            <SocialBar />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
    </div>
  );
};

export default PersistentDrawerLeft;
