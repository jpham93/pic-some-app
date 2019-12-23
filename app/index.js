import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Photos from './pages/Photos';
import Cart from './pages/Cart';
import { AppContextProvider, AppContext } from './context/appContext';

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Photos />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('app')
);