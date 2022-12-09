import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledBox, StyledParagraph, StyledSpan, StyledTitle, } from './Salutation.styled';
const Salutation = () => {
    return (_jsxs(StyledBox, { children: [_jsxs(StyledTitle, Object.assign({ variant: "h5", as: "h1", mb: 3 }, { children: ["Welcome to ", _jsx("br", {}), _jsx(StyledSpan, Object.assign({ as: "span", variant: "h3" }, { children: "\"My PhoneBook\"" }))] })), _jsxs(StyledParagraph, Object.assign({ paragraph: true, variant: "h5" }, { children: ["With", ' ', _jsx(StyledSpan, Object.assign({ as: "span", variant: "h5" }, { children: "\"My PhoneBook\"" })), ' ', "you can store your contacts in a safe and secure place. Now your contacts are available to you (and only you) at any time, anywhere, from any gadget with Internet access."] }))] }));
};
export default Salutation;
//# sourceMappingURL=Salutation.js.map