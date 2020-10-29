import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Fornecedor from './Fornecedor';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/fornecedor" component={Fornecedor} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

