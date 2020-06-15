import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useStyles from './useStyles';
import constants from '../constants';
import { create } from 'apisauce';
import BaseCard from '../Card/index';

// this will render and place all the cards nicely
// TODO: order by date
const CardGrids = () => {
  const [data, setData] = useState([]);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const api = create({ baseURL: constants.github });

  useEffect(() => {
    async function fetchData() {
      const result = await api.get('/repos');
      console.log(result.data);
      setData(result.data.filter((cur) => !cur.fork));
    }

    fetchData();
  }, []);

  return (
    <Grid container spacing={2} style={{ padding: '8px' }}>
      {data.map(({ name, html_url, language, description, created_at }) => {
        const date = new Date(created_at);
        return (
          <Grid item>
            <BaseCard
              name={name}
              language={`Language used: ${language}`}
              description={description}
              url={html_url}
              date={new Intl.DateTimeFormat('en-GB', options).format(date)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardGrids;
