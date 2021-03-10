import React from "react";
import PropTypes from 'prop-types';
const Header = ({ text }) => {
  return (
    <header className="App-header">
      <h2 data-testid="header">{text}</h2>
    </header>
  );
};
Header.propTypes = {
    text: PropTypes.string,
  };
export default Header;
