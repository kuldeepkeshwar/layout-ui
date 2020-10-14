### Direction

```js editor=live
import { Stack } from 'layout-ui';

render(
  <Card>
    <Stack gap="4px" direction="horizontal">
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Stack>
  </Card>,
);
```

```js editor=live
import { Stack } from 'layout-ui';

render(
  <Card>
    <Stack gap="4px" direction="vertical">
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Stack>
  </Card>,
);
```

### Alignment (main axis)

```js editor=live
import { Stack } from 'layout-ui';

render(
  <Stack gap="16px" direction="vertical">
    <Card>
      <Stack gap="4px" direction="horizontal" align="start" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" align="center" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" align="end" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" align="space-between" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" align="space-evenly" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" align="space-around" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="horizontal" align="stretch" width="400px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
  </Stack>,
);
```

```js editor=live
import { Stack } from 'layout-ui';

render(
  <Stack gap="16px" direction="horizontal">
    <Card>
      <Stack gap="4px" direction="vertical" align="start" height="200px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" align="center" height="200px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" align="end" height="200px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" align="space-between" height="200px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" align="space-evenly" height="200px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" align="space-around" height="200px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
    <Card>
      <Stack gap="4px" direction="vertical" align="stretch" height="200px">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
      </Stack>
    </Card>
  </Stack>,
);
```

### Alignment (cross axis)

```js editor=live
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

```js editor=live
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
