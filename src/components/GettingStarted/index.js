import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { Helmet } from 'react-helmet';
import Home from './Home';

class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = { viewportHeight: props.height };
  }

  componentWillMount() {
    this.setState({ viewportHeight: window.innerHeight });
  }

  render() {
    const { match } = this.props;

    const { viewportHeight } = this.state;

    const topSpace = viewportHeight / 3;

    console.log('viewportHeight', this.state.viewportHeight);

    return (
      <div className="wrapper">
        <Helmet>
          <title>Getting started - 8020DesignSchool.com</title>
        </Helmet>

        <div className="sidebar">
          <NavLink to={`${match.url}`} exact activeClassName="active">
            Introduction
          </NavLink>

          <span>Visual Elements</span>
          <NavLink activeClassName="active" to={`${match.url}/line`}>
            Line
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/colour`}>
            Colour
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/shape`}>
            Shape
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/texture`}>
            Texture
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/space`}>
            Space
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/form`}>
            Form
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/typography`}>
            Typography
          </NavLink>

          <span>Design Principles</span>
          <NavLink activeClassName="active" to={`${match.url}/contrast`}>
            Contrast
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/hierarchy`}>
            Hierarchy
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/alignment`}>
            Alignment
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/balance`}>
            Balance
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/proximity`}>
            Proximity
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/repetition`}>
            Repetition
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/simplicity`}>
            Simplicity
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/function`}>
            Function
          </NavLink>
        </div>

        <div
          className="contentWrapper"
          style={{ paddingTop: topSpace, paddingBottom: topSpace }}
        >
          <Route exact path={match.url} component={Home} />
          <Route path={`${match.url}/:topicId`} component={Topic} />
        </div>
      </div>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default GettingStarted;
