# myproject

#### 07/20/2018
Recently (2 days ago) I realized that while I use webpack quite often, I do not know how to configure it myself. So, in an attempt to make better use of webpack and its degree of granularity , I decided to learn about its core concepts and how to set it up from scratch.

This project is the product of my experimentation with various webpack's feature and highly customizable configurations.

Restructured directory structure.

#### 07/21/2018

Started setting up the infrastructure for a full stack, server side rendered application using Express on the back-end and React, along with React-Router, on the front-end.

Still figuring out how to bring all the pieces together to achieve expected behavior.

`npm run server` currently using `concurrently` to simultaneously run express server (on PORT 300) and webpack-dev-server (on PORT 9000). Playing with `proxy` property of devServer in webpack configurations but haven't fully achieved expected behavior yet.

The goal is for the React Application to be served when the client reaches `/` (root) route, and for React-Router to handle any subsequent routing.

<hr >

## dependencies to install

- react
- react-dom

## dev dependencies to install

- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge

## loaders and plugins to install

- babel-loader
- babel-core
- babel-preset-es2015
- babel-preset-react
- style-loader
- css-loader
- sass-loader
- node-sass
- url-loader
- file-loader
- compression-webpack-plugin
- extract-text-webpack-plugin
- html-webpack-plugin
- uglifyjs-webpack-plugin

