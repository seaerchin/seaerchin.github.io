import React from 'react';
import PersistentDrawer from './PersistentDrawer';
import { Box, Container, Paper } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CodeBox from './CodeBox/index';
import LandingPage from './LandingPage';
import CardGrids from './CardGrids/index';
import Resume from './InfoList';

// drudgery goes here
// TODO: add music to website
// TODO: scroll into view
const App = () => {
  return (
    <Router>
      <PersistentDrawer />
      <Container
        style={{
          height: 'calc(100vh - 64px)',
          top: '64px',
          position: 'relative',
          display: 'flex',
        }}
      >
        <Switch>
          <Route path="/About Me">
            <LandingPage />
          </Route>
          <Route path="/Projects">
            <CardGrids />
          </Route>
          <Route path="/Experiences">
            <Resume />
          </Route>
          <Route path="/">
            <Box width="70%" height="70%" style={{ placeSelf: 'center' }} m="0 25%">
              <Paper
                style={{ background: 'rgb(25, 25, 25)', padding: '8px', width: '100%', height: '100%' }}
                elevation={5}
              >
                <CodeBox text={['$ cat about.json']} />
              </Paper>
            </Box>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
