import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch } from 'hooks/hooksConfig';
import { logOut } from 'redux/user/userOperations';
import useAuth from 'hooks/useAuth';
import { StyledBox, StyledButton } from './UserMenu.styled';
const UserMenu = () => {
    const dispatch = useAppDispatch();
    const { profile } = useAuth();
    const handleClick = () => {
        dispatch(logOut());
    };
    return (_jsxs(StyledBox, { children: [_jsx("p", { children: profile.email }), _jsx(StyledButton, Object.assign({ variant: "outlined", onClick: handleClick }, { children: "Log Out" }))] }));
};
export default UserMenu;
//# sourceMappingURL=UserMenu.js.map