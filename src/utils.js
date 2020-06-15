import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';

const makeHackerText = (isBold = false) => (text) => {
  return (
    <Typography
      style={{ color: 'orange', fontFamily: 'Anonymous Pro', fontWeight: `${isBold ? 'bold' : {}}` }}
    >
      {text}
    </Typography>
  );
};

const wrapInPaper = (element, options = {}) => {
  return (
    <Paper style={{ ...options, background: 'rgb(25,25,25)', padding: '8px' }} elevation={3}>
      {element}
    </Paper>
  );
};

const makeGridItem = (listItems) => {
  return listItems.map((cur) => <Grid item>{cur}</Grid>);
};

export { makeHackerText, wrapInPaper, makeGridItem };
