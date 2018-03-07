import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Line from './Line';
import Color from './Color';
import Shape from './Shape';
import Texture from './Texture';
import Space from './Space';
import Form from './Form';
import Typography from './Typography';

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
        <Route exact path={`${match.url}/line`} render={props => <Line />} />
        <Route exact path={`${match.url}/color`} render={props => <Color />} />
        <Route exact path={`${match.url}/shape`} render={props => <Shape />} />
        <Route
          exact
          path={`${match.url}/texture`}
          render={props => <Texture />}
        />
        <Route exact path={`${match.url}/space`} render={props => <Space />} />
        <Route exact path={`${match.url}/form`} render={props => <Form />} />
        <Route
          exact
          path={`${match.url}/typography`}
          render={props => <Typography />}
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
