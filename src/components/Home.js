import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { Helmet } from 'react-helmet';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Helmet>
          <title>Courses - 8020DesignSchool.com</title>
        </Helmet>

        <img src={Logo} />
        <h1>Beginners guide to Graphic Design</h1>

        <Link to="/getting-started">
          <RaisedButton label="Let's get started" />
        </Link>
      </div>
    );
  }
}

export default Home;
