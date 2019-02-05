import React from 'react';

const Navbar = props => (
  <header className="inner-container">
    <div>Current Score: {props.currentScore}</div>
    <div>{props.message}</div>
    <div>Top Score: {props.topScore}</div>
  </header>
);

export default Navbar;
