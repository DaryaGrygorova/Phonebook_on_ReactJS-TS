import { Box, Link, styled } from '@mui/material';
export const StyledLink = styled(Link) `
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  display: block;
  text-transform: uppercase;

  &.active {
    font-weight: 900;
    text-decoration: underline;
  }
`;
export const StyledBox = styled(Box) `
  display: flex;
  gap: ${p => p.theme.spacing(4)};
  align-items: center;
`;
//# sourceMappingURL=Navigation.styled.js.map