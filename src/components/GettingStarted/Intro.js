import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Intro extends Component {
  render() {
    const { match, VisEle, DesgnPrin, Pill } = this.props;

    return (
      <div>
        <h5>Introduction</h5>
        <h2>What is Graphic Design?</h2>

        <p>
          Graphic design is not drawing, not painting, not creating a poster or
          a quick logo on your computer.
        </p>

        <p>
          These things are the means to the end and are skills in their own
          right.<br />
          Graphic design is not about making things look pretty,
        </p>

        <p>
          Graphic design is the organisation and presentation of information,
          developed through a creative process for a particular function.
        </p>

        <p>
          In graphic design we must first understand information, a message or a
          brief and then research, think, imagine and develop and create a
          solution, a concept in order to communicate that information, tell a
          story, a message or idea in a visual way.
        </p>

        <p>
          It's only once we have a solid idea developed through the design
          process we can use our skills with layout, colour, typography and
          creative tools to bring that idea to life
        </p>

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
      </div>
    );
  }
}

export default Intro;
