# Quick Start

request-all-in-one wrapped by https://tanstack.com/query/latest

```bash
npm install request-all-in-one-hook
# peerDependencies
npm install react react-dom @microsoft/fetch-event-source @apollo/client @tanstack/react-query socket.io-client
```

```typescript
// socket
const timeFromSocket = useSocket('/socket-io', 'time');

// graphql
const {data}: any = useGraphql('https://countries.trevorblades.com', {
  query: queryCountries
});

// fetch
const {data}: any = useFetch('https://api.github.com/repos/TanStack/query');
```

fetch for get, post

socket.io for socket

@apollo/client for graphql


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
