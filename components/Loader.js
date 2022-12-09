import { jsx as _jsx } from "react/jsx-runtime";
import { Bars } from 'react-loader-spinner';
import { Box } from '@mui/material';
const Loader = () => {
    return (_jsx(Box, Object.assign({ display: "flex", alignItems: "center", height: "50vw", justifyContent: "center" }, { children: _jsx(Bars, { visible: true, height: "100px", width: "100px", ariaLabel: "MagnifyingGlass-loading", color: "#3f51b5" }) })));
};
export default Loader;
//# sourceMappingURL=Loader.js.map