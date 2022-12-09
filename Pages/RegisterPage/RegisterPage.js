import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Salutation from 'components/Salutation/Salutation';
import RegisterFormWrapper from 'components/RegisterForm/RegisterFormWrapper';
import RegisterForm from 'components/RegisterForm';
import { StyledPaper } from './RegisterPage.styled';
const RegisterPage = () => {
    return (_jsxs(StyledPaper, Object.assign({ elevation: 0, sx: {} }, { children: [_jsx(Salutation, {}), _jsx(RegisterFormWrapper, { children: _jsx(RegisterForm, {}) })] })));
};
export default RegisterPage;
//# sourceMappingURL=RegisterPage.js.map