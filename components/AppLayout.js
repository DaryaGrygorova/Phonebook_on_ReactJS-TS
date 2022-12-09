import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';
import Header from './Header';
import { Container } from '@mui/material';
const Layout = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Container, Object.assign({ maxWidth: "md" }, { children: _jsx(Suspense, Object.assign({ fallback: _jsx(Loader, {}) }, { children: _jsx(Outlet, {}) })) }))] }));
};
export default Layout;
//# sourceMappingURL=AppLayout.js.map