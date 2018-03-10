import React, { Component } from 'react';
import line01 from '../../../assets/images/elements/1.svg';
import line02 from '../../../assets/images/elements/2.svg';
import line03 from '../../../assets/images/elements/3.svg';
import line04 from '../../../assets/images/elements/4.svg';
import line05 from '../../../assets/images/elements/5.svg';
import line06 from '../../../assets/images/elements/6.svg';
import line07 from '../../../assets/images/elements/7.svg';
import line08 from '../../../assets/images/elements/8.svg';

class Line extends Component {
  render() {
    return (
      <div className="subject-content">
        <h2>Line</h2>

        <p>
          A line is a basic element that refers to the continuous movement of a
          point along a surface, such as by a pencil or brush. The edges of
          shapes and forms also create lines. It is the basic component of a
          shape drawn on paper. Lines and curves are the basic building
          blocks of two-dimensional shapes like a house's plan. Every line has
          length, thickness, and direction. There are curved, horizontal,
          vertical, diagonal, zigzag, wavy, parallel, dashed, and dotted lines.
        </p>
        <p>
          Lines, lines, lines. Lines are everywhere in design, they are used to
          divide space, direct the user's eye, create flow, create emphasis and
          organise all design elements into form. Generally, we don't think
          about lines that much, but we make use of them quite often to visually
          communicate our objective to the user. The web is about communication,
          so using lines to communicate your message properly is important.
        </p>

        <img src={line01} />

        <h5>Communication — Line Types</h5>
        <p>
          First of all, a line is simply a fluid connection between two or more
          points. It seems like there is an endless supply of differing types of
          lines, from thin lines to thick lines, short lines to long lines, wavy
          lines to straight lines. But just like everything in design — or in
          life — there are some basic lines that we need to understand.
        </p>

        <ul>
          <li>
            <strong>Literal line</strong> A literal line is just that, a line.
            It’s the visual or actual line you see.
          </li>
          <li>
            <strong>Implied line</strong> This type of line is the “imaginary”
            line that your mind instantly creates by connecting dots or elements
            together. The best example of this is a dotted line.
          </li>
          <li>
            <strong>Psychic line</strong> This type of line is another
            “imaginary” line that differs slightly from implied line in that
            psychic lines are generally used to create eye direction form one
            element to the next. A great example of this in web is a photo of a
            person looking in a particular direction, or a series of arrows.
          </li>
          <li>
            <strong>Contour lines</strong> Contour lines are mainly used to
            define edges and create boundaries of elements. This type of line is
            probably the line type mostly used or seen in web design, borders
            being a classic example.
          </li>
          <li>
            <strong>Dividing lines</strong> Dividing lines divide space and are
            commonly implied lines that are used to divide content areas such as
            the dividing spaces between columns of text.
          </li>
          <li>
            <strong>Decorative lines</strong> This type of line is generally
            used to add something to an element: texture, depth, shading,
            function or any other decorative embellishment. The most well know
            decorative lines in web design is the underline under a text link.
          </li>
        </ul>

        <h5>Meaning and Mood</h5>
        <p>
          Lines are great for creating mood and meaning. Beyond the foundational
          line types above, other line types and styles can be used to create
          meaning and mood. Because there truly are an endless number of line
          types and combinations within, we’ll just take a look at the few main
          types.
        </p>

        <ul>
          <li>
            <strong>Vertical lines</strong>
            Vertical lines simulate height and can create a mood of grandeur or
            spirituality. Great examples of this is the vertical line usage in
            churches and cathedrals where ceilings are lifted on tall vertical
            pillars guiding the eyes upward. In web design vertical lines tend
            to represent or create length and indicate to the user that there is
            more content below the fold.
          </li>
          <li>
            <strong>Horizontal lines</strong>
            Horizontal lines generally create relaxation or a calming mood, they
            tend to be quiet and subtle whereas vertical lines are more imposing
            and powerful. In web design horizontal lines are also known for
            their ability to organize content. When you look at gridded layouts
            you’ll notice that horizontal lines are the elements creating
            balance and organization — even though grids are generally laid
            vertically.
          </li>
          <li>
            <strong>Curved lines</strong>
            The majority of curved lines create familiarity and comfort, they
            also suggest relaxation. Curved lines are very easy on the eyes and
            are interesting to follow. Curvy lines are associated with nature —
            they feel very organic.
          </li>
          <li>
            <strong>Diagonal lines</strong>
            Diagonal lines are the greatest way to create movement and
            direction. Where horizontal lines suggest gravity and are stable,
            diagonal lines are more unstable. These lines don’t lay down or
            stand up in a restful position, they are in motion and you can
            actually create a sense of speed just by simply adjusting the pitch
            of the lines: the steeper, the faster.
          </li>
          <li>
            <strong>Thick lines</strong>
            Thick lines are visually powerful on the canvas, they represent
            power and respect. The use of thick lines can build a feeling of
            power and boldness. However, the overuse of thick lines can be very
            overwhelming and way too demanding so you’ll need to be careful and
            balance them off with other visual elements or differing weights of
            line.
          </li>
          <li>
            <strong>Thin lines</strong>
            Thin lines tend to feel fragile, but their subtle feeling makes them
            great for directing the eye without being annoying. They are also
            empathetic to the viewer and tend to create a feeling of comfort and
            tranquility. Combining thin and thick lines is a great way to create
            visual interest and hierarchy by balancing the visually demanding
            thick lines with the subtle, comforting thin lines.
          </li>
        </ul>

        <div className="examples">
          <h5>Some of the examples</h5>
          <img src={line02} />
          <img src={line03} />
          <img src={line04} />
          <img src={line05} />
          <img src={line06} />
          <img src={line07} />
          <img src={line08} />
        </div>
      </div>
    );
  }
}

export default Line;
