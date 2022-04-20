import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import { createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

import Header from './components/Header';
import Home from './home';
import CreateList from './createList';
import store from './store';

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <Provider store={store}> 
      <MuiThemeProvider theme={theme}>
        <Router>
        <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/lista/:action' component={CreateList} />
          </Switch>
        </div>
        </Router>
        
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
