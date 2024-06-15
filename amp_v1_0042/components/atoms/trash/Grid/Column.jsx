import styled, {css} from 'styled-components';

const ucFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const Column = styled.div`
  max-width: 100%;
  box-sizing: border-box;

  flex: 1 0 auto;
  order: ${({order}) => order};
  
  ${({
    span, offset, theme, ...props
  }) => {
    let lastSpan = span;
    let lastOffset = offset;
    const {breakpoints, grid} = theme;

    return Object.keys(breakpoints).map((breakpoint) => {
      lastSpan = props[breakpoint] || lastSpan;
      lastOffset = props[`offset${ucFirst(breakpoint)}`] || offset;

      return css`
        @media(min-width: ${breakpoints[breakpoint]}px) { 
          ${lastSpan && css`flex: 0 0 ${Math.min(lastSpan / grid[breakpoint].columns, 1) * 100}%;`}
          padding-left: ${grid[breakpoint].gutter / 2}px;
          padding-right: ${grid[breakpoint].gutter / 2}px;
          margin-bottom: ${grid[breakpoint].gutter}px;
          margin-left: ${Math.min(lastOffset / grid[breakpoint].columns, 1) * 100}%;
        }
      `;
    });
  }}
`;

Column.defaultProps = {
  span: 0,
  offset: 0,
  order: 1
};

export default Column;
