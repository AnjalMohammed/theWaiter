import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchSection from './Components/SearchSection';
import SelectionSection from './Components/SelectionSection';

class Homepage extends Component {

    render() {
        return (
            <>
                <SearchSection />
                <SelectionSection />
            </>
        );
    }
}

export default withRouter(Homepage);