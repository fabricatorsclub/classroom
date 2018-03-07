import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

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
          path={`${match.url}/line`}
          render={props => <div>line</div>}
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
