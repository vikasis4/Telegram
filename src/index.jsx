import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store.js'
import StateProvider from "./context/state.js";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <StateProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StateProvider>
    </Provider>
);
