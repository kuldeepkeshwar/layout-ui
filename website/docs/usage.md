### Install

`yarn add layout-ui`
or
`npm install layout-ui`

### Usage

- Stack

  ```jsx editor=static
  import { Stack } from 'layout-ui';

  render(
    <Stack gap="4px">
      <span>Item 1</span>
      <span>Item 2</span>
    </Stack>,
  );
  ```

- Columns

  ```jsx editor=static
  import { Columns } from 'layout-ui';

  render(
    <Columns gap="4px">
      <Columns.Column width="200px">Item 1</Columns.Column>
      <Columns.Column width="400px">Item 2</Columns.Column>
    </Columns>,
  );
  ```
