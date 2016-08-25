import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import SearchPets from './components/SearchPets'
import PetProfile from './components/PetProfile'
import OwnerProfile from './components/OwnerProfile'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='search/:type' component={SearchPets} />
      <Route path='pet/:id' component={PetProfile} />
      <Route path='search/owner' component={OwnerProfile} />
    </Route>
  </Router>,
  document.getElementById('root')
);
