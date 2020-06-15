import Typewriter from 'typewriter-effect';
import useStyles from './useStyles';
import React from 'react';

// just to wrap so that cursor is white
const BaseTyper = ({ onInit }) => {
  const classes = useStyles();
  return (
    <Typewriter
      onInit={onInit}
      options={{
        cursorClassName: classes.Typewritercursor,
      }}
    />
  );
};

export default BaseTyper;
