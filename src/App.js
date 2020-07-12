import React from 'react';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import { Wrapper } from './styles/AppStyles';
import CopyRightText from './Components/CopyRightText';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(rootReducer, composeWithDevTools());

const App = (props) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <Wrapper>
                    <Routes />
                    <CopyRightText />
                </Wrapper>
            </ThemeProvider>
        </Provider>
    )
};

export default App;