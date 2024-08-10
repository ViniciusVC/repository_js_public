import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ifProp} from 'styled-tools';

import * as mixins from '../../../helpers/styles_mixins';

const Table = styled.table.attrs(() => ({border: '0', cellspacing: '0', cellpadding: '0'}))`
  position: relative;

  margin: 0;
  padding: 0;
  width: ${({width}) => width};
  min-width: ${({minwidth}) => minwidth};
  max-width: ${({maxwidth}) => maxwidth};
  height: ${({height}) => height};
  min-height: ${({minheight}) => minheight};
  max-height: ${({maxheight}) => maxheight};

  background-color: #ffffff;
  border: solid 1px #dbdbdb;
  border-radius: 4px;
  border-collapse: collapse;

  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWeight}) => mixins.fontWeight(fontWeight)};
  font-size: ${({fontSize}) => mixins.rem(fontSize)};
  color: #222222;
  text-transform: ${ifProp('uppercase', 'uppercase', 'none')};
  text-decoration: none;
`;

Table.Head = styled.thead`
  background-color: #f5f5f5;
`;

Table.Body = styled.tbody`
  background-color: #fff;
`;

Table.Foot = styled.tfoot`
  border-top: 1px solid #dbdbdb;
`;

Table.Title = styled.th`
  color: #222222;
  font-family: 'SimplonHeadline';
  font-size: 1em;
  font-weight: normal;
  padding: 16px 32px;
  text-transform: uppercase;
`;

Table.Row = styled.tr`
  border: 0;
  border-bottom: 1px solid #dbdbdb;

  &:last-child {
    border: 0;
  }
`;

Table.Cell = styled.td`
  padding: 32px;
  
  color: #222222;
  font-size: .875em;
`;

Table.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
  fontSize: PropTypes.number,
  bgcolor: PropTypes.string,
  border: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      top: PropTypes.string,
      bottom: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string
    })
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
  minwidth: PropTypes.string,
  minheight: PropTypes.string,
  maxwidth: PropTypes.string,
  maxheight: PropTypes.string,
  fontcolor: PropTypes.string
};

Table.defaultProps = {
  width: 'initial',
  height: 'initial',
  minwidth: 'initial',
  minheight: 'initial',
  maxwidth: 'initial',
  maxheight: 'initial',
  margin: [0, 0],
  padding: [0, 0],
  fontFamily: 'Simplon, SimplonHeadline, OiTextRegular, simplon_bpregular, sans-serif',
  fontSize: 16,
  fontWeight: 'Regular',
  fontcolor: '#fff'
};

export {Table};
export default Table;
