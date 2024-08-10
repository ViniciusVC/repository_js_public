import styled, {css} from 'styled-components';
import Column from './Column';

const Row = styled.div`
  display: flex;
  flex-wrap: ${({noWrap}) => (noWrap ? 'nowrap' : 'wrap')};
  flex-direction: ${({direction}) => direction};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};

  ${({theme: {grid, breakpoints}}) => Object.keys(breakpoints)
    .reverse()
    .map(
      breakpoint => css`
          @media (min-width: ${breakpoints[breakpoint]}px) {
            margin-right: -${grid[breakpoint].gutter / 2}px;
            margin-left: -${grid[breakpoint].gutter / 2}px;
          }
        `
    )}

  ${({noGutter}) => noGutter
    && css`
      margin-right: 0 !important;

      margin-left: 0 !important;  
      & > ${Column} {
        padding-left: 0;
        padding-right: 0;
      }
    `}
`;

Row.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start',
  noWrap: false,
  noGutter: false
};

export default Row;
