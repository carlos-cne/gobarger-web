import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashborad from '../pages/Dashborad';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashborad} isPrivate />
  </Switch>
);

export default Routes;
