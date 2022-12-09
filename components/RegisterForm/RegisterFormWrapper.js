import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as RouteLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import { setUserError } from 'redux/user/userSlice';
import { useAppDispatch } from './../../hooks/hooksConfig';
import { StyledPaper, StyledParagraph, StyledSpan, } from './RegisterFormWrapper.styled';
const RegisterFormWrapper = ({ children }) => {
    const dispatch = useAppDispatch();
    const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;
    return (_jsxs(StyledPaper, Object.assign({ elevation: 5 }, { children: [_jsxs(StyledParagraph, Object.assign({ paragraph: true, variant: "h5" }, { children: ["Please", ' ', _jsx(StyledSpan, Object.assign({ as: "span", variant: "h5" }, { children: "register" })), ' ', "to use"] })), children, _jsxs(Typography, Object.assign({ paragraph: true, variant: "h6" }, { children: ["Do you already have an account?", ' ', _jsxs(Link, Object.assign({ component: RouteLink, to: `/${ROUTE_HOME_PAGE}/login`, onClick: () => dispatch(setUserError()) }, { children: [_jsx(Typography, Object.assign({ component: "span", variant: "h6" }, { children: "Log In" })), ' '] }))] }))] })));
};
export default RegisterFormWrapper;
//# sourceMappingURL=RegisterFormWrapper.js.map