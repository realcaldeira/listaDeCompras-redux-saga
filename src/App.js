import React from 'react';
import './App.css';


import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

import AppBar from '@material-ui/core/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color='primary'>
        <div className='header'>
          <p className='title'>Lista de compras</p>
        </div>
      </AppBar>
    <div>
      <h1>Test</h1>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
