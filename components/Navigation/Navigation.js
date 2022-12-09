import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import { StyledLink, StyledBox } from './Navigation.styled';
const Navigation = () => {
    return (_jsxs(StyledBox, { children: [_jsx(StyledLink, Object.assign({ component: NavLink, to: "home", my: 2 }, { children: "Home" })), _jsx(StyledLink, Object.assign({ to: "contacts", component: NavLink, my: 2 }, { children: "Contacts" }))] }));
};
export default Navigation;
//# sourceMappingURL=Navigation.js.map