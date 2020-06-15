import React from 'react';
import { List, ListItem, Divider, ListItemText, Typography, Box, Grid, Paper } from '@material-ui/core';
import mappings from './mappings';
import useStyles from './useStyles';

const Resume = () => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <Paper elevation={3}>
        <ListItem
          alignItems="center"
          style={{ height: '40vh', background: 'rgb(203, 224, 255)', justifyContent: 'center' }}
        >
          <Paper
            elevation={3}
            style={{
              display: 'inherit',
              height: '128px',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              background: '#fcf9a8',
            }}
          >
            <Typography variant="h1" style={{ fontSize: '144px' }}>
              Experience
            </Typography>
          </Paper>
        </ListItem>
        {mappings.map((cur) => {
          return <AlignItemsList {...cur} />;
        })}
      </Paper>
    </List>
  );
};

// icon on the left, rest on teh right
// description = (city, dates)
// company sitting below
// below is jobs
// below is description
// listItems is an arr
const AlignItemsList = ({ icon, city, to, from, year, company, job, listItems }) => {
  const makeTop = () => {
    return (
      <Typography variant="h6">
        <Box marginRight="8px" fontStyle="italic">
          {city}
        </Box>
        {`${to} - ${from} ${year}`}
      </Typography>
    );
  };

  const toList = () => {
    return (
      <ul>
        {listItems.map((cur) => {
          return <li>{cur}</li>;
        })}
      </ul>
    );
  };

  // TODO: tidy this
  return (
    <ListItem divider alignItems="flex-start" style={{ justifyContent: 'center' }}>
      <Paper style={{ width: '60%', padding: '8px' }} elevation={2}>
        <Grid container spacing={2}>
          <Grid item>
            <img src={icon} alt="Logo" style={{ width: '250px', height: '250px' }} />
          </Grid>
          <Box width="50%" p="8px">
            <Grid item>
              <Grid container spacing={1} direction="column">
                <Grid item>{makeTop()}</Grid>
                <Grid item>
                  <Typography variant="h1">{company}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{job}</Typography>
                </Grid>
                <Grid item>{toList()}</Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </ListItem>
  );
};

export default Resume;
