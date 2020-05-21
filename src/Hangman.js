import React, { Fragment } from "react";
import styled, { css } from "styled-components";

// in large project ideally would pull these properties from shared styles as constants
const defaultStyles = css`
  stroke-width: 6;
  fill: none;
`;

const hangmanStyles = css`
  stroke: black;
  ${defaultStyles};
`;

const hangmanSupportStyles = css`
  stroke: grey;
  ${defaultStyles};
`;

const Base = styled.polyline`
  ${hangmanSupportStyles};
`;

const Body = styled.polyline`
  ${hangmanStyles};
`;

const Eye = styled.polyline`
  stroke: red;
  stroke-width: 2;
`;

export default function Hangman({ remainingGuesses }) {
  return (
    <svg height="400" width="400">
      <Base points="250 300, 250 10, 150 10, 150 50" />
      <Base points="300 300, 100 300" />

      {remainingGuesses < 6 && (
        <Fragment>
          <circle cx="150" cy="80" r="30" fill="black"></circle>
          {!remainingGuesses && (
            <Fragment>
              <Eye points="135 75,145 85" />
              <Eye points="135 85, 145 75" />
              <Eye points="155 75, 165 85" />
              <Eye points="155 85, 165 75" />
            </Fragment>
          )}
        </Fragment>
      )}

      {remainingGuesses < 5 && <Body points="150 110, 150 125" />}
      {remainingGuesses < 4 && <Body points="125 125, 175 125" />}
      {remainingGuesses < 3 && <Body points="150 125, 150 175" />}
      {remainingGuesses < 2 && <Body points="150 175, 125 210" />}
      {!remainingGuesses && <Body points="150 175, 175 210" />}
    </svg>
  );
}
