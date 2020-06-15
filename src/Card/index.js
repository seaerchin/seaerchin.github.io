import React from 'react';
import { Card, CardActions, CardContent, Button, Grid, Box } from '@material-ui/core';
import useStyles from './useStyles';
import { wrapInPaper, makeGridItem } from '../utils';
import { makeText, lineBreak } from '../CodeBox/utils';
import BaseTyper from '../Typewriter/index';

const BaseCard = ({ name, url, description, language, date }) => {
  const classes = useStyles();

  const typed = (text) => (
    <BaseTyper
      onInit={(typewriter) => {
        typewriter.typeString(makeText(text)).start();
      }}
    />
  );

  const pasted = (text) => (
    <BaseTyper
      onInit={(typewriter) => {
        typewriter.pasteString(makeText(text)).start();
      }}
    />
  );

  console.log(
    lineBreak(
      [date, description, language].map((cur) => {
        return makeText(cur);
      }),
    ),
  );

  return (
    <Card className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%" zIndex={2}>
        <CardContent>
          <Grid container direction="column" spacing={2}>
            {makeGridItem([wrapInPaper(typed(name))])}
            {makeGridItem([
              wrapInPaper(
                pasted(
                  `${lineBreak(
                    [date, description, language].map((cur) => {
                      return `${makeText(cur)}<br>`;
                    }),
                  )}<br> Click below to find out more`,
                ),
              ),
            ])}
          </Grid>
        </CardContent>
        <a href={url}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
            style={{ width: '64px', height: '64px', margin: '8px' }}
          />
        </a>
      </Box>
    </Card>
  );
};

export default BaseCard;
