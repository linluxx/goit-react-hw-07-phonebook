import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

import { App } from 'components/App/App';
import { theme } from './constants/theme';
import { store } from 'redux/store';
import { baseStyles } from 'constants/globalStyles';

const GlobalStyles = createGlobalStyle` ${baseStyles} ${normalize}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
