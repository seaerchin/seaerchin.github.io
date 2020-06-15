import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import TextsmsIcon from '@material-ui/icons/Textsms';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { Avatar, Popover, Button, Box } from '@material-ui/core';

import useStyles from './useStyles';
import { IconButton } from '@material-ui/core';

// TODO: figure out something to do with this - currently not every useful
const BottomBar = () => {
  const classes = useStyles();
  return (
    <BottomNavigation
      className={classes.parent}
      style={{ left: 'calc(25vw)', position: 'fixed', background: 'transparent' }}
    >
      {[
        { icon: <TextsmsIcon />, text: 'reach me at 82990039' },
        { icon: <EmailIcon />, text: 'drop me an email at jer005@e.ntu.edu.sg' },
        { icon: <PhoneIcon />, text: 'call at 82990039' },
      ].map(({ icon, text }) => (
        <Avatar className={classes.avatar}>
          <PopoverButton icon={icon} text={text} />
        </Avatar>
      ))}
    </BottomNavigation>
  );
};

const PopoverButton = ({ icon, text }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <IconButton onClick={handleClick}>{icon}</IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Button variant="text" style={{ textTransform: 'inherit' }}>
          {text}
        </Button>
      </Popover>
    </Box>
  );
};

export default BottomBar;
