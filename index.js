import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { myTheme } from './myTheme';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(PersistGate, Object.assign({ loading: null, persistor: persistor }, { children: _jsx(BrowserRouter, { children: _jsx(Provider, Object.assign({ store: store }, { children: _jsx(ThemeProvider, Object.assign({ theme: theme }, { children: _jsx(MUIThemeProvider, Object.assign({ theme: myTheme }, { children: _jsx(App, {}) })) })) })) }) })) }));
//# sourceMappingURL=index.js.map