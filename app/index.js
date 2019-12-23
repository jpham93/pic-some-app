import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';

const App = (props) => {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));