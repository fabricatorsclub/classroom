import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Contrast from './Contrast';
import Hierarchy from './Hierarchy';
import Alignment from './Alignment';
import Balance from './Balance';
import Proximity from './Proximity';
import Repetition from './Repetition';
import Simplicity from './Simplicity';
import Function from './Function';

class DesignPrinciples extends Component {
  render() {
    const { match, DesgnPrin, Pill } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.url}`}
          render={props => <DesgnPrincHome DesgnPrin={DesgnPrin} Pill={Pill} />}
        />

        <Route
          exact
          path={`${match.url}/contrast`}
          render={props => <Contrast />}
        />
        <Route
          exact
          path={`${match.url}/hierarchy`}
          render={props => <Hierarchy />}
        />
        <Route
          exact
          path={`${match.url}/alignment`}
          render={props => <Alignment />}
        />
        <Route
          exact
          path={`${match.url}/balance`}
          render={props => <Balance />}
        />
        <Route
          exact
          path={`${match.url}/proximity`}
          render={props => <Proximity />}
        />
        <Route
          exact
          path={`${match.url}/repetition`}
          render={props => <Repetition />}
        />
        <Route
          exact
          path={`${match.url}/simplicity`}
          render={props => <Simplicity />}
        />
        <Route
          exact
          path={`${match.url}/function`}
          render={props => <Function />}
        />
      </div>
    );
  }
}

const DesgnPrincHome = ({ DesgnPrin, Pill }) => {
  return (
    <div className="ctaContainer">
      <h5>Design Principles</h5>
      {DesgnPrin.map((data, i) => {
        return (
          <Pill
            key={i}
            url={`design-principles/${data.toLowerCase()}`}
            count={`0${i + 1}`}
            label={data}
          />
        );
      })}
    </div>
  );
};

export default DesignPrinciples;
