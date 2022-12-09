import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { LinearProgress } from '@mui/material';
import ContactItem from './ContactItem';
import Notification from 'components/Notification';
import { selectContactsFilter, selectContactsIsLoading, selectFilteredContacts, } from 'redux/contacts/contactsSelectors';
import { StyledList, StyledListItem } from './ContactList.styled';
const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const contactsFilter = useSelector(selectContactsFilter);
    const isLoading = useSelector(selectContactsIsLoading);
    return (_jsxs(_Fragment, { children: [isLoading && _jsx(LinearProgress, { color: "secondary" }), _jsx(StyledList, Object.assign({ dense: false }, { children: (contacts === null || contacts === void 0 ? void 0 : contacts.length) > 0 ? (contacts.map((item) => (_jsx(StyledListItem, { children: _jsx(ContactItem, { item: item }) }, item.id)))) : (_jsx(Notification, { message: contactsFilter ? 'No matches found' : 'Add your first contacts' })) }))] }));
};
export default ContactList;
//# sourceMappingURL=ContactList.js.map