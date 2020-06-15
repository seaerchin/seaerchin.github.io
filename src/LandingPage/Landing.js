import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import useStyles from './useStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// listItems is an array of {main, description}
// TODO: fix display on small screen
// TODO: refactor so you can actually read this bs
const LandingPage = ({ listItems = [] }) => {
  const isBig = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const classes = useStyles({ isBig: isBig });
  console.log(listItems);

  const formatted = (text) => {
    return (
      <Box maxWidth="30%">
        <Typography className={classes.description} variant="subtitle">
          {text}
        </Typography>
      </Box>
    );
  };

  const style = { height: '50vh', width: 'inherit' };

  return (
    <div
      style={{
        height: '50vh',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      <Grid
        style={{
          height: 'inherit',
          width: 'inherit',
        }}
        container
        display="column"
      >
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          style={{
            background: '#CBE0FF',
            height: 'inherit',
            width: 'inherit',
          }}
        >
          <Typography className={classes.mainText}>hello.</Typography>
          <Typography className={classes.subText}>my name is chin</Typography>
        </Grid>
        {listItems.map(({ image, description }, index) => (
          <Grid container alignItems="center" justify="space-evenly" style={style}>
            {index % 2 === 0 ? (
              <>
                {image}
                {formatted(description)}
              </>
            ) : (
              <>
                {formatted(description)}
                {image}
              </>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LandingPage;

// {image}
// {formatted(description)}
