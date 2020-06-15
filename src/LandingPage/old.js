import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import useStyles from './useStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AboutLogo from '../Assets/About.svg';
import TechLogo from '../Assets/Tech.svg';

// listItems is an array of {main, description}
// TODO: fix display on small screen
// TODO: refactor so you can actually read this bs
const LandingPage = ({ listItems = [] }) => {
  const isBig = useMediaQuery((theme) => theme.breakpoints.up('md'));
  console.log(isBig);
  const classes = useStyles({ isBig: isBig });
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
            transition: 'transform 1s ease-out, opacity 1s ease-out',
          }}
        >
          <Typography className={classes.mainText}>hello.</Typography>
          <Typography className={classes.subText}>my name is chin</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          style={{ height: '40vh', width: 'inherit' }}
        >
          <img src={AboutLogo} alt="Logo" height="80%" />
          <Box maxWidth="30%">
            <Typography className={classes.description} variant="subtitle">
              I am a year 4 student in Nanyang Technological University and i'm currently studying businesss
              and computing! i code and windsurf on the weekends. scroll down to find out more about me!
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          style={{ height: '40vh', width: 'inherit' }}
        >
          <img src={TechLogo} alt="Logo" height="80%" />
          <Box maxWidth="30%">
            <Typography className={classes.description} variant="subtitle">
              i have experience working with the following languages: Go, Python, C#, Java and i've dabbled in
              a few others besides!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {listItems.map(({ main, description }) => {
        return null;
      })}
    </div>
  );
};

export default LandingPage;
