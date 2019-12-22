import React, { Component } from 'react';
import { render } from 'react-dom';
import 'tachyons';
import './index.css';
import App from './containers/App';

const app = document.getElementById('app');
render(<App />, app);
