import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { LocalPhone } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch } from 'hooks/hooksConfig';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { StyledWrap, StyledAvatar, StyledButton } from './ContactItem.styled';
const ContactItem = ({ item }) => {
    const { name, number, id } = item;
    const dispatch = useAppDispatch();
    const OnDeleteHandle = () => dispatch(deleteContact(id));
    return (_jsx(_Fragment, { children: _jsxs(Grid, Object.assign({ container: true, spacing: 1, sx: { alignItems: 'center' } }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 5 }, { children: _jsxs(StyledWrap, { children: [_jsx(StyledAvatar, { children: name ? name[0].toUpperCase() : ';)' }), _jsx(Typography, Object.assign({ variant: "body1" }, { children: name }))] }) })), _jsx(Grid, Object.assign({ item: true, xs: 5 }, { children: _jsxs(StyledWrap, { children: [_jsx(LocalPhone, {}), _jsx(Typography, Object.assign({ variant: "subtitle1" }, { children: number }))] }) })), _jsx(Grid, Object.assign({ item: true, xs: 2 }, { children: _jsx(StyledButton, Object.assign({ type: "button", onClick: OnDeleteHandle }, { children: "Delete" })) }))] })) }));
};
export default ContactItem;
//# sourceMappingURL=ContactItem.js.map