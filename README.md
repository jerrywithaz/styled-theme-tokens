# Styled Theme Tokens

Styled Theme Tokens makes it easy to configure and manage themes for styled components within react projects.
It provides an unopinionated yet powerful api for defining themes as javascript objects that works well with designers and developers.

## Philosophy

The Philosophy behind `styled-theme-tokens` is that defining themes should be easy yet flexible enough to manage
theme variations such as `dark` or `light` mode. Developers should be able to define all of the variations of a particular
design token in 1 place.

## API

### ThemeProvider

The ThemeProvider provides all of your `styled-components` with the resolved theme. You'll need to wrap your entire app
with the ThemeProvider.

```tsx
import { ThemeProvider } from `styled-theme-tokens`;
import theme from './source/to/theme';

function App() {
    return (
        <ThemeProvider theme={theme} variants={{ mode: "light", size: "compact" }}>
            {...}
        </ThemeProvider>
    );
}
```

### token

The `token` function creates a design token that will be resolved based on the current theme's variants i.e. `light` or `dark` or `compact` or `dense`, etc...

You can define your tokens in as many or as few files as you like.

Tokens are defined as such:

```tsx
import { token } from 'styled-theme-tokens';

// ex: /src/theme/colors.ts
// will resolve to either `darkred` or `red`
const PrimaryColor = token("mode", {
    dark: "darkred",
    light: "red"
}),

// ex: /src/theme/spacing.ts
// will resolve to either `4px` or `8px`
const DefaultPadding = token("size", {
    compact: "4px",
    dense: "8px"
}),
```

#### complex tokens

Tokens don't have to resolve to just strings, they can resolve any any number of objects, functions, or primitives.

Example:

```tsx
import { token } from 'styled-theme-tokens';

// ex: /src/theme/colors.ts
const PrimaryColor = token("mode", {
    dark: {
        color: "darkred",
        rgba: () => {}
    },
    light: {
        color: "red",
        rgba: () => {}
    }
}),

```

Depending on how you defined your theme, in a styled component you could access the props as such:

```css
    color: ${theme.colors.primary.dark.color};
```
