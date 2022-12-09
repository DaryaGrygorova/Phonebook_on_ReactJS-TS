import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/hooksConfig';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import InputGroup from 'components/InputGroup/InputGroup';
import { StyledForm, StyledButton, } from './ContactForm.styled';
const ContactForm = () => {
    const dispatch = useAppDispatch();
    const contacts = useSelector(selectContacts);
    const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    const phoneNumberRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required('"Name" is a required field')
            .matches(nameRegExp, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),
        number: yup
            .string()
            .required('"Number" is a required field')
            .matches(phoneNumberRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'),
    });
    const onSubmitHandler = (value, { resetForm }) => {
        const normalizedName = value.name.toLowerCase();
        (contacts === null || contacts === void 0 ? void 0 : contacts.find(({ name }) => name.toLowerCase().includes(normalizedName)))
            ? alert(`${value.name} is already in contacts.`)
            : dispatch(addContact(Object.assign({}, value)));
        resetForm();
    };
    return (_jsx(Formik, Object.assign({ initialValues: { name: '', number: '' }, validationSchema: validationSchema, onSubmit: onSubmitHandler }, { children: _jsxs(StyledForm, { children: [_jsx(InputGroup, { name: 'name', type: 'text', autoComplete: false }), _jsx(InputGroup, { name: 'number', type: 'tel', autoComplete: false }), _jsx(StyledButton, Object.assign({ type: "submit" }, { children: "Add contact" }))] }) })));
};
export default ContactForm;
//# sourceMappingURL=ContactForm.js.map