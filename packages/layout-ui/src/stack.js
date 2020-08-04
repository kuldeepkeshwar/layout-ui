import PropTypes from 'prop-types';
import React from 'react';
import { styled } from '@filbert-js/core';
const alignments = [
  'start',
  'end',
  'center',
  'stretch',
  'space-around',
  'space-between',
  'space-evenly',
];
const alignmentsY = ['start', 'end', 'center', 'stretch'];
function gaps({ theme: { space = {} } = {}, gap }) {
  return space[gap] || gap || '0px';
}
function gridStyles({
  direction = 'vertical',
  height = 'auto',
  width = 'auto',
  align = 'stretch',
  alignY = 'stretch',
  gap,
  theme,
  children,
}) {
  if (direction === 'vertical') {
    return `
      justify-items: ${alignY};
      align-content: ${align};
      grid-row-gap: ${gaps({ theme, gap })};
      height:${height};
      grid-template-columns:${width};
      grid-template-rows: repeat(${React.Children.count(children)}, auto);
    `;
  } else {
    return `
      justify-content: ${align};
      align-items: ${alignY};
      grid-column-gap: ${gaps({ theme, gap })};
      width:${width};
      grid-template-rows:${height};
      grid-template-columns: repeat(${React.Children.count(children)}, auto);
      `;
  }
}

export const Stack = styled('div')`
  display: grid;
  ${gridStyles};
`;
Stack.propTypes = {
  gap: PropTypes.string,
  align: PropTypes.oneOf(alignments),
  alignY: PropTypes.oneOf(alignmentsY),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};
