import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './Scenes/Login/Login';
import Homepage from './Scenes/Homepage/Homepage';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Homepage} />

        </Switch>
    </Router>
);

export default Routes;