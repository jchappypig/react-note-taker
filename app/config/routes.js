import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Router, {Route, IndexRoute} from 'react-router';


const routes =  (
  <Route path="/" component={Main}>
    <IndexRoute component = {Home} />
    <Route path='/profile/:username' component={Profile} />
  </Route>
);

export default routes;