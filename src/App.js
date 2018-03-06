import React, { Component } from 'react';
import './assets/stylesheets/screen.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Chat from './components/Chat';
import Home from './components/Home';
import GettingStarted from './components/GettingStarted';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#845af7',
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="dsgd-wrapper">
            <Chat />

            <Route exact path="/" component={Home} />
            <Route path="/getting-started" component={GettingStarted} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
