import { createGlobalStyle } from 'styled-components';
import backgroundIMG from "images/18129294.jpg";
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle `
body {
  margin: ${({ theme }) => theme.space[0]}px;
  margin-top: 70px;  
  padding-left: ${({ theme }) => theme.space[5]}px;
  padding-right: ${({ theme }) => theme.space[5]}px;
  padding-top:  ${({ theme }) => theme.space[3]}px;
  padding-bottom:  ${({ theme }) => theme.space[0]}px;
  font-family:  ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.text};
  background: url(${backgroundIMG}) no-repeat fixed;
  background-size: cover;
}

ul {
  padding: ${({ theme }) => theme.space[0]}px;
  margin: ${({ theme }) => theme.space[0]}px;
  /* list-style-type: none;  */
}

h1, h2, h3, p {
  padding: ${({ theme }) => theme.space[0]}px;
  margin: ${({ theme }) => theme.space[0]}px;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace, 'Roboto';
}

`;
//# sourceMappingURL=GlobalStyle.js.map