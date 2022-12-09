import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, LinearProgress, Typography } from '@mui/material';
import { Outlet } from 'react-router';
import { Suspense, useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import FromAuthor from 'components/FromAuthor';
import useAuth from 'hooks/useAuth';
import { useAppDispatch } from 'hooks/hooksConfig';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { StyledSideBar, StyledSidebarThumb, StyledContentWrap, } from './ContactsPage.styled';
const ContactsPage = () => {
    const dispatch = useAppDispatch();
    const { isLogIn } = useAuth();
    useEffect(() => {
        if (isLogIn) {
            dispatch(fetchContacts());
        }
    }, [dispatch, isLogIn]);
    return (_jsxs(Box, Object.assign({ display: "flex" }, { children: [_jsx(StyledSideBar, Object.assign({ as: "aside" }, { children: _jsxs(StyledSidebarThumb, { children: [_jsx(Typography, Object.assign({ component: "h1", variant: "h5", my: 0 }, { children: "My PhoneBook" })), _jsx(ContactForm, {}), _jsx(Filter, {}), _jsx(FromAuthor, {})] }) })), _jsx(StyledContentWrap, { children: _jsx(Suspense, Object.assign({ fallback: _jsx(LinearProgress, { color: "secondary" }) }, { children: _jsx(Outlet, {}) })) })] })));
};
export default ContactsPage;
//# sourceMappingURL=ContactsPage.js.map