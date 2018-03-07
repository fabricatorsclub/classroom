import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class VisualElements extends Component {
  render() {
    const { match, VisEle, Pill } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.url}`}
          render={props => <VisualEleHome VisEle={VisEle} Pill={Pill} />}
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

const VisualEleHome = ({ VisEle, Pill }) => {
  return (
    <div className="ctaContainer">
      <h5>Visual Elements</h5>
      {VisEle.map((data, i) => {
        return (
          <Pill
            key={i}
            url={`visual-elements/${data.toLowerCase()}`}
            count={`0${i + 1}`}
            label={data}
          />
        );
      })}
    </div>
  );
};

export default VisualElements;
