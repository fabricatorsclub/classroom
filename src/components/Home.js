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
          <title>Classroom - 8020DesignSchool.com</title>
        </Helmet>

        <img src={Logo} />
        <h1>Beginners guide to Graphic Design</h1>

        <Link to="/graphic-design">
          <RaisedButton label="Let's get started" />
        </Link>

        <iframe src="/bg/canvas_particles_waves.html" />
      </div>
    );
  }
}

export default Home;
