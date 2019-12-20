import React, { Component } from 'react';
import { render } from 'react-dom';
import 'tachyons';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="f1 tc sans-serif">Hello, World!</h1>
      </div>
    );
  }
}

export default App;

const app = document.getElementById('app');
render(<App />, app);
