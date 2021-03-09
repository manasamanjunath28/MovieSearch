import React from "react";

const Header = ({ text }) => {
  return (
    <header className="App-header">
      <h2 data-testid="header">{text}</h2>
    </header>
  );
};

export default Header;
