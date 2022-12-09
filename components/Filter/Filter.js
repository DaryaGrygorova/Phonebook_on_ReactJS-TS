import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectContactsFilter, selectContactsIsLoading, } from 'redux/contacts/contactsSelectors';
import { Form, Input } from './Filter.styled';
import { useEffect } from 'react';
const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectContactsFilter);
    const isContactsLoading = useSelector(selectContactsIsLoading);
    const onChangeHandle = (e) => {
        dispatch(setFilter(e.currentTarget.value));
    };
    useEffect(() => {
        if (isContactsLoading) {
            dispatch(setFilter(''));
        }
    }, [dispatch, isContactsLoading]);
    return (_jsxs(Form, Object.assign({ as: "form", onSubmit: e => e.preventDefault() }, { children: [_jsx("label", Object.assign({ htmlFor: "contactsFilter" }, { children: "Find contacts by name " })), _jsx(Input, { id: "contactsFilter", type: "text", name: "filter", value: value, onChange: onChangeHandle, autoComplete: "off", color: "secondary", size: "small" })] })));
};
export default Filter;
//# sourceMappingURL=Filter.js.map