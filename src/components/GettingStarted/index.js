import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import BrandName from '../../assets/images/logo-name.svg';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import Intro from './Intro';
import VisualElements from './VisualElements';
import DesignPrinciples from './DesignPrinciples';

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

    const Pill = ({ url, count, label }) => {
      return (
        <NavLink
          className="pill"
          activeClassName="active"
          to={`${match.url}/${url}`}
        >
          <span className="num">{count}</span>
          <span className="label">{label}</span>
        </NavLink>
      );
    };

    const VisEle = [
      'Line',
      'Colour',
      'Shape',
      'Texture',
      'Space',
      'Form',
      'Typography',
    ];
    const DesgnPrin = [
      'Contrast',
      'Hierarchy',
      'Alignment',
      'Balance',
      'Proximity',
      'Repetition',
      'Simplicity',
      'Function',
    ];

    return (
      <div className="wrapper">
        <Helmet>
          <title>Getting started - 8020DesignSchool.com</title>
        </Helmet>

        <div className="header">
          <div className="brand">
            <img className="logo" src={Logo} width="30" />
            <img className="BrandName" src={BrandName} width="180" />
          </div>

          <div className="menu">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName="active" to={`${match.url}`}>
              Introduction
            </NavLink>
            <NavLink
              activeClassName="active"
              to={`${match.url}/visual-elements`}
            >
              Visual Elements
            </NavLink>
            <NavLink
              activeClassName="active"
              to={`${match.url}/design-principles`}
            >
              Design Principles
            </NavLink>
          </div>
        </div>

        <div
          className="contentWrapper"
          style={{ paddingTop: topSpace, paddingBottom: topSpace }}
        >
          <Route
            exact
            path={match.url}
            render={props => (
              <Intro
                {...props}
                VisEle={VisEle}
                DesgnPrin={DesgnPrin}
                Pill={Pill}
              />
            )}
          />
          <Route
            path={`${match.url}/visual-elements`}
            render={props => (
              <VisualElements {...props} VisEle={VisEle} Pill={Pill} />
            )}
          />
          <Route
            path={`${match.url}/design-principles`}
            render={props => (
              <DesignPrinciples {...props} DesgnPrin={DesgnPrin} Pill={Pill} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default GettingStarted;
