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
      <Columns.Column width="100px">
        <Box>Two</Box>
      </Columns.Column>
      <Columns.Column width="150px">
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
      <Columns gap="4px" align="start">
        <Columns.Column width="75px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="150px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="center">
        <Columns.Column width="75px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="150px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="end">
        <Columns.Column width="75px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="150px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="space-between">
        <Columns.Column width="75px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="150px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="space-evenly">
        <Columns.Column width="75px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="150px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="space-around">
        <Columns.Column width="75px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="150px">
          <Box>Three</Box>
        </Columns.Column>
      </Columns>
    </Card>
    <Card>
      <Columns gap="4px" align="stretch">
        <Columns.Column width="75px">
          <Box>One</Box>
        </Columns.Column>
        <Columns.Column width="100px">
          <Box>Two</Box>
        </Columns.Column>
        <Columns.Column width="150px">
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
import { Stack } from 'layout-ui';

render(
  <Stack gap="16px">
    <Card>
      <Stack gap="4px" direction="horizontal" alignY="start" height="100px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" alignY="center" height="100px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" alignY="end" height="100px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" alignY="stretch" height="100px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
  </Stack>,
);
```

```js
// @live
import { Stack } from 'layout-ui';

render(
  <Stack gap="16px">
    <Card>
      <Stack gap="4px" direction="vertical" alignY="start" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" alignY="center" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" alignY="end" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" alignY="stretch" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
  </Stack>,
);
```
