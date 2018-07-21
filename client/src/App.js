import React, { Component } from 'react';
// import IndexPage from './components/IndexPage';
import Routes from './routing/routes';

class App extends Component {
  render() {
    return (
      <div id="entry">
        {/* <IndexPage /> */}
        <Routes />
      </div>
    )
  }
}

export default App;