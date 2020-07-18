import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';

import Login from './Scenes/Login/Login';
import Homepage from './Scenes/Homepage';
import Listing from './Scenes/Listing';

const Routes = () => (
    <Router
    //  basename="/theWaiter/"
     >
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/:source/list" component={Listing} />
            <Route path="/" component={Homepage} />

        </Switch>
    </Router>
);

export default Routes;