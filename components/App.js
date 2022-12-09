import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import { fetchCurrentUser } from 'redux/user/userOperations';
import Loader from './Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useAppDispatch } from 'hooks/hooksConfig';
const Layout = lazy(() => import('components/AppLayout'));
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('Pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('Pages/HomePage'));
const ContactList = lazy(() => import('components/ContactList'));
export const App = () => {
    const dispatch = useAppDispatch();
    const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;
    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);
    return (_jsxs(_Fragment, { children: [_jsx(Suspense, Object.assign({ fallback: _jsx(Loader, {}) }, { children: _jsx(Routes, { children: _jsxs(Route, Object.assign({ path: `/${ROUTE_HOME_PAGE}`, element: _jsx(Layout, {}) }, { children: [_jsxs(Route, Object.assign({ element: _jsx(PublicRoute, { redirectPath: "contacts" }) }, { children: [_jsx(Route, { path: "register", element: _jsx(RegisterPage, {}) }), _jsx(Route, { path: "login", element: _jsx(LoginPage, {}) }), _jsx(Route, { index: true, element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "*", element: _jsx(LoginPage, {}) })] })), _jsxs(Route, Object.assign({ element: _jsx(PrivateRoute, { redirectPath: "login" }) }, { children: [_jsx(Route, Object.assign({ path: "contacts", element: _jsx(ContactsPage, {}) }, { children: _jsx(Route, { index: true, element: _jsx(ContactList, {}) }) })), _jsx(Route, { path: "home", element: _jsx(HomePage, {}) })] }))] })) }) })), _jsx(GlobalStyle, {})] }));
};
//# sourceMappingURL=App.js.map