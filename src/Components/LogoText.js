import React from 'react';
import { LogoH1 } from '../styles/ComponentStyles';
import { withRouter } from 'react-router-dom';

const LogoText = props => (
    <LogoH1
        onClick={() => {
            if (props.redirect)
                props.history.push('/')
        }}
        {...props}>
        Company Name</LogoH1>
);

export default withRouter(LogoText);