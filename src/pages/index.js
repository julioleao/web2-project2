import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import List from './List';
import Login from './Login';

export default () => (
    <Switch>
        <Route path="/list" component={List} />
        <Route path="/login" component={Login} />
        <Redirect path="/" to="/list" />
    </Switch>
)