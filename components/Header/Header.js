import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from '@mui/material';
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';
import { StyledAppBar, StyledToolbar } from './Header.styled';
const Header = () => {
    const { isLogIn } = useAuth();
    return (_jsx(StyledAppBar, Object.assign({ position: "fixed", component: "header" }, { children: _jsx(Container, Object.assign({ maxWidth: "md" }, { children: _jsxs(StyledToolbar, Object.assign({ disableGutters: true }, { children: [_jsx(Navigation, {}), isLogIn ? _jsx(UserMenu, {}) : _jsx(AuthNav, {})] })) })) })));
};
export default Header;
//# sourceMappingURL=Header.js.map