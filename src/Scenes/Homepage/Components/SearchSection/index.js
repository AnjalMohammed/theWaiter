import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MasterSearchDiv, HomepageLogoDiv } from './styles';
import LogoText from '../../../../Components/LogoText';
import { SelectionMasterDiv, HomepageSelect, HomepageInput } from './styles';

class SearchSection extends Component {

    render() {
        return (
            <MasterSearchDiv>
                <LogoText
                    margin="0 2rem"
                    color="white"
                    fontSize="400%"
                    extrabold
                />
                <SelectionMasterDiv>
                    <HomepageSelect placeholder="Select a location" style={{ width: 200, height: 60 }}>
                        <Option value="1">Dubai</Option>
                        <Option value="2">Abudabi</Option>
                        <Option value="3">Sharjah</Option>
                    </HomepageSelect>
                    <HomepageInput
                        style={{ width: 500 }}
                        placeholder="Search for cuisine or dish..."
                        onSearch={value => console.log(value)}
                        enterButton />
                </SelectionMasterDiv>
            </MasterSearchDiv>
        );
    }
}

export default withRouter(SearchSection);