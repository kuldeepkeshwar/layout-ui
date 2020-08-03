import { LiveError, LivePreview, LiveProvider } from 'react-live';

import { Editor } from './Editor';
import React from 'react';
import { Stack } from 'layout-ui';
import { styled } from '@filbert-js/core';

const yellowish = 'rgb(245, 186, 76)';
const bluish = 'rgb(117, 172, 253)';

const Card = styled('div')`
  background: ${yellowish};
`;
const Box = styled('div')`
  background: ${bluish};
  font-size: 20px;
  padding: 8px;
`;
const scope = {
  Box,
  Card,
  process: {
    env: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  require(moduleName) {
    switch (moduleName) {
      case 'react':
        return React;
      case '@filbert-js/core':
        return require('@filbert-js/core');
      case 'layout-ui':
        return require('layout-ui');

      default:
        // eslint-disable-next-line no-throw-literal
        throw `Module "${moduleName}" not found`;
    }
  },
};

const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ({ code, compiled }) => {
  return (
    <Stack direction="vertical" align="stretch" gap="1rem">
      <Preview>
        <LiveProvider code={compiled} scope={scope} noInline>
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </Preview>
      <Editor code={code} />
    </Stack>
  );
};
