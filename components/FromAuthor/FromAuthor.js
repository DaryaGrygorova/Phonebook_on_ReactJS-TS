import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { StyledPaper, StyledParagraph } from './FromAuthor.styled';
import content from './data.json';
const FromAuthor = () => {
    const [currentInd, setCurrentInd] = useState(() => Math.floor(Math.random() * -9) + 10);
    useEffect(() => {
        const getRandomInd = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        const intervalId = setInterval(() => {
            const newInd = getRandomInd(0, content.length - 1);
            setCurrentInd(newInd);
        }, 60000);
        return () => clearInterval(intervalId);
    }, []);
    return (_jsxs(StyledPaper, Object.assign({ elevation: 0 }, { children: [_jsxs(StyledParagraph, Object.assign({ paragraph: true, variant: "body1" }, { children: ["\"", content[currentInd].text, "\""] })), _jsx(StyledParagraph, Object.assign({ paragraph: true, variant: "body1" }, { children: content[currentInd].author }))] })));
};
export default FromAuthor;
//# sourceMappingURL=FromAuthor.js.map