import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { LoginWrapper } from './styles';
import LogoText from '../../Components/LogoText';
import LoginRoutes from './Components/LoginRoutes';

import { connect } from 'react-redux'
class Login extends Component {

    render() {
        return (
            <>
                {
                    this.props.loggedIn ?
                        <Redirect to="/" />
                        :
                        <LoginWrapper>
                            <LogoText />
                            <LoginRoutes />
                        </LoginWrapper>
                }
            </>
        );
    }
}

const mapStateToProps = ({
    login: { loggedIn }
}) => ({
    loggedIn
})

export default withRouter(connect(mapStateToProps)(Login));