import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = (props) => {
  return (
    <div className="jumbotron">
      <div className="header">
        <h2>Exchange Rates</h2>
        <h3>As of: {props.time}</h3>
      </div>
    </div>
  );
};

export default Header;