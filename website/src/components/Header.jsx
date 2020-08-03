import LogoIcon from './../images/icons/github.svg';
import React from 'react';
import { Stack } from 'layout-ui';
export function Header() {
  return (
    <Stack direction="horizontal" align="end">
      <a
        href="https://github.com/kuldeepkeshwar/layout-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoIcon />
      </a>
    </Stack>
  );
}
