/**
 * @name IndexPage.js
 * @description
 * This is the equivalent of a Home Page.
 * That is, the Application's Main Page.
 * @author Juan C. Gonzalez
 */

 import React, { Component } from 'react';

 class IndexPage extends Component {
   render () {
      return (
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Hero World
              </h1>
              <h2 className="subtitle">
                Welcome to my React project
              </h2>
              <h2 className="subtitle">
                I set it up using Webpack
              </h2>
            </div>
          </div>
        </section>
      )
   }
 };

 export default IndexPage;