import styled, {css} from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  
  ${({theme: {grid, breakpoints}, fixed}) => Object.keys(breakpoints).reverse().map(breakpoint => css`
    @media(min-width: ${breakpoints[breakpoint]}px) {
      ${fixed && `width: ${grid[breakpoint].container}px;`}
      padding-right: ${grid[breakpoint].gutter / 2}px;
      padding-left: ${grid[breakpoint].gutter / 2}px;
    }
  `)}
`;

export default Container;
