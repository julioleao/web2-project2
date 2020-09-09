import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import List from './List';

export default () => (
    <Switch>
        <Route path="/list" component={List} />
        <Redirect path="/" to="/list" />
    </Switch>
)