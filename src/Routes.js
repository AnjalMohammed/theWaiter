import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './Scenes/Login/Login';
import Homepage from './Scenes/Homepage/Homepage';
import LIsting from './Scenes/LIsting';

const Routes = () => (
    <Router basename="/theWaiter/">
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/list" component={LIsting} />
            <Route path="/" component={Homepage} />

        </Switch>
    </Router>
);

export default Routes;