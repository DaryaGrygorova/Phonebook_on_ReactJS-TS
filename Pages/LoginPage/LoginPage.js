import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Salutation from 'components/Salutation/Salutation';
import LogInForm from 'components/LogInForm';
import LogInFormWrapper from 'components/LogInForm/LogInFormWrapper';
import { StyledPaper } from './LoginPage.styled';
const LoginPage = () => {
    return (_jsxs(StyledPaper, Object.assign({ elevation: 0 }, { children: [_jsx(Salutation, {}), _jsx(LogInFormWrapper, { children: _jsx(LogInForm, {}) })] })));
};
export default LoginPage;
//# sourceMappingURL=LoginPage.js.map