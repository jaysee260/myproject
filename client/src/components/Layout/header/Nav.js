import React from 'react';

const Nav = () => 
  <nav className="navbar" role="navigation" aria-label="main-navigation">
    <div className="navbar-brand">
      <a href="#" className="navbar-item">
        <p className="brand-text">
          myproject
        </p>
      </a>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>

export default Nav;