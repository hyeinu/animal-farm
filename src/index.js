import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import SearchPets from './components/SearchPets'
// import OwnerSearch from './components/OwnerSearch'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='search/:type' component={SearchPets} />
      {/* <Route path='search/owner' component={OwnerSearch} /> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
