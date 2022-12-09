import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import { StyledButton, StyledBox } from './AuthNav.styled';
const AuthNav = () => {
    return (_jsxs(StyledBox, { children: [_jsx(StyledButton, Object.assign({ component: NavLink, variant: "button", to: "register", my: 2 }, { children: "Sign up" })), _jsx(StyledButton, Object.assign({ component: NavLink, variant: "button", to: "login", my: 2 }, { children: "Log In" }))] }));
};
export default AuthNav;
//# sourceMappingURL=AuthNav.js.map