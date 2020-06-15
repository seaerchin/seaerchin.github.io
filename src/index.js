import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@300;400&family=Anonymous+Pro:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
