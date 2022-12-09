import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { nanoid } from 'nanoid';
import { Input, StyledErrorMessage } from './InputGroup.styled';
const InputGroup = ({ name, type, autoComplete, }) => {
    const inputId = nanoid();
    return (_jsxs(_Fragment, { children: [_jsx("label", Object.assign({ htmlFor: inputId }, { children: name ? name[0].toUpperCase() + name.slice(1) : '' })), _jsx(Input, { id: inputId, type: type, name: name, autoComplete: autoComplete ? 'on' : 'off' }), _jsx(StyledErrorMessage, { name: name, component: "div" })] }));
};
export default InputGroup;
//# sourceMappingURL=InputGroup.js.map