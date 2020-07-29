[![version](https://img.shields.io/npm/v/layout-ui)](https://www.npmjs.com/package/layout-ui)

[![gzip size](https://img.badgesize.io/https://unpkg.com/layout-ui@latest/dist/index.es.js?compression=gzip)](https://unpkg.com/layout-ui)
[![downloads](https://img.shields.io/npm/dw/layout-ui)](https://www.npmjs.com/package/layout-ui)


# layout-ui

React Components for Layout

## Install

`yarn add layout-ui` or `npm install layout-ui`

## Usage

- Stack

  ```js
  import { Stack } from "layout-ui";

  render(
    <Stack gap="4px">
      <span>Item 1</span>
      <span>Item 2</span>
    </Stack>
  );
  ```

- Columns

  ```js
  import { Columns } from "layout-ui";

  render(
    <Columns gap="4px">
      <Columns.Column width="200px">Item 1</Columns.Column>
      <Columns.Column width="400px">Item 2</Columns.Column>
    </Columns>
  );
  ```
