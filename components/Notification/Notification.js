import { jsx as _jsx } from "react/jsx-runtime";
import { StyledMessage } from './Notification.styled';
const Notification = ({ message }) => {
    return _jsx(StyledMessage, Object.assign({ as: "p" }, { children: message }));
};
export default Notification;
//# sourceMappingURL=Notification.js.map