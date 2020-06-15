import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';

import { Grid } from '@material-ui/core';

const SocialBar = () => {
  const arr = [
    { to: 'https://github.com/seaerchin', icon: <GitHubIcon /> },
    { to: 'https://linkedin.com/in/er-jia-chin-75988a159', icon: <LinkedInIcon /> },
    { to: 'https://leetcode.com/seaerchin', icon: <CodeIcon /> },
  ];

  return (
    <Grid container direction="row" justify="space-evenly">
      {arr.map(({ to, icon }) => (
        <Grid item>
          <a href={to}>{icon}</a>
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialBar;
