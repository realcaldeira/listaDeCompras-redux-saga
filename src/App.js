import React from 'react';
import './App.css';


import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

import Header from './components/Header';
import Home from './home';

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
      <Header />
    
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
