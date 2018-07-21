import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import './styles/index.scss';
import 'bulma';
import App from './App';
import Layout from './Layout';

const root = document.getElementById("root");

ReactDOM.render(
  <Layout>
    <App />
  </Layout>,
  root
);