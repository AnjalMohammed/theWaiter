import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import SearchSection from './Components/SearchSection';
import SelectionSection from './Components/SelectionSection';
import { connect } from 'react-redux'
class Homepage extends Component {

    render() {
        return (
            <>
                {
                    !this.props.loggedIn ?
                        <Redirect to="/login" />
                        :
                        <>
                            <SearchSection />
                            <SelectionSection />
                        </>
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

export default withRouter(connect(mapStateToProps)(Homepage));