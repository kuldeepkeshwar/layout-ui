### Width & Gap

```js
// @live
import { Columns } from 'layout-ui';

render(
  <Card>
    <Columns gap="4px">
      <Columns.Column width="content">
        <Box>One</Box>
      </Columns.Column>
      <Columns.Column width="75px">
        <Box>Two</Box>
      </Columns.Column>
      <Columns.Column width="100px">
        <Box>Three</Box>
      </Columns.Column>
    </Columns>
  </Card>,
);
```

### Alignment (main axis)

```js
// @live
import { Stack, Columns } from 'layout-ui';

render(
  <Stack gap="16px" direction="vertical">
    <Card>
      <Columns gap="4px" align="start" width="400px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="center" width="400px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="end" width="400px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="space-between" width="400px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="space-evenly" width="400px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="space-around" width="400px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="stretch" width="400px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column>
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
  </Stack>,
);
```

### Alignment (cross axis)

```js
// @live
import { Stack, Columns } from 'layout-ui';

render(
  <Stack gap="16px">
    <Card>
      <Columns gap="4px" alignY="start" height="100px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" alignY="center" height="100px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" alignY="end" height="100px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" alignY="stretch" height="100px">
        <Columns.Column width="100px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
  </Stack>,
);
```
