import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import useAuth from 'hooks/useAuth';
const HomePage = () => {
    const { profile } = useAuth();
    return (_jsxs(_Fragment, { children: [_jsx(Typography, Object.assign({ component: "h2", variant: "h4", mb: 4 }, { children: "Welcome to the best PhoneBook!" })), _jsxs(Typography, Object.assign({ paragraph: true, variant: "body1" }, { children: ["Hello, ", profile === null || profile === void 0 ? void 0 : profile.name, ", on this page we will tell you about the new features of the \"My phoneBook\". Soon..."] }))] }));
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map