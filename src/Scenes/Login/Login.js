import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LoginWrapper } from './styles';
import LogoText from '../../Components/LogoText';
import LoginRoutes from './Components/LoginRoutes';

class Login extends Component {

    render() {
        return (
            <LoginWrapper>
                <LogoText />
                <LoginRoutes />
            </LoginWrapper>
        );
    }
}

export default withRouter(Login);