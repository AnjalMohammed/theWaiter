import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import CreateUser from './CreateUser';

const LoginRoutes = () => (
    <Switch>
        <Route path='/login/reset' component={ResetPassword} />
        <Route path='/login/createUser' component={CreateUser} />
        <Route path="/login" component={LoginForm} />
    </Switch>
);

export default LoginRoutes;