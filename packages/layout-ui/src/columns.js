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

function gap({ theme: { space = {} } = {}, gap }) {
  return space[gap] || gap || '0px';
}
function size({ theme: { sizes = {} } = {}, widths = [] }) {
  return widths.map((w) => sizes[w] || w).join(' ');
}
const Grid = styled('div')`
  display: grid;
  column-gap: ${gap};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  grid-template-columns: ${size};
  justify-content: ${({ align }) => align || 'start'};
  align-items: ${({ alignY }) => alignY || 'start'};
`;
const Cell = styled('div')``;
export function Columns({
  children,
  gap,
  align,
  alignY,
  height = 'auto',
  width = 'auto',
}) {
  const widths = [];
  const Columns = React.Children.toArray(children).map(
    ({ props: { width, children } }) => {
      widths.push(width === 'content' ? 'max-content' : width || '1fr');
      return children;
    },
  );
  return (
    <Grid
      gap={gap}
      height={height}
      width={width}
      widths={widths}
      align={align}
      alignY={alignY}
    >
      {Columns}
    </Grid>
  );
}
Columns.propTypes = {
  gap: PropTypes.string,
  align: PropTypes.oneOf(alignments),
  alignY: PropTypes.oneOf(alignmentsY),
};
function Column({ children }) {
  return <Cell>{children}</Cell>;
}
Column.propTypes = {
  width: PropTypes.string,
};
Columns.Column = Column;
