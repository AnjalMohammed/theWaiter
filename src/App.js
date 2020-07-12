import React from 'react';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import { Wrapper } from './styles/AppStyles';
import CopyRightText from './Components/CopyRightText';

const App = (props) => {
    return (
        <ThemeProvider theme={Theme}>
            <Wrapper>
                <Routes />
                <CopyRightText />
            </Wrapper>
        </ThemeProvider>
    )
};

export default App;