import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router';
import useAuth from 'hooks/useAuth';
const PublicRoute = ({ redirectPath = '/contacts', children, }) => {
    const { isLogIn } = useAuth();
    if (isLogIn) {
        return _jsx(Navigate, { to: redirectPath, replace: true });
    }
    return children ? _jsx(_Fragment, { children: children }) : _jsx(Outlet, {});
};
export default PublicRoute;
//# sourceMappingURL=PublicRoute.js.map