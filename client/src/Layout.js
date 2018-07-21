import React, { Component } from 'react';

import Nav from './components/Layout/header/Nav';
import Footer from './components/Layout/footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div id="app-container">

        <header id="app-header">
          <Nav />
        </header>

        <main id="app-content">
          {this.props.children}
        </main>

        <footer id="app-footer">
          <Footer />
        </footer>

      </div>
    )
  }
}

export default Layout;