import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
  </Router>
  <App/>,
  document.getElementById('root')
);
