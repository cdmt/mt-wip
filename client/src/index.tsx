import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'

import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./utils/client";

import Navbar from './navbar'

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Navbar />
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);

