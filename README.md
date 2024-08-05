# create-aelf-dapp-components

```bash
# independent
pnpm run -C packages/request-all-in-one build
lerna run build --scope request-all-in-one
# all
pnpm recursive run build
lerna run build
# Remove the node_modules directory from all packages
lerna clean
rm -rf node_modules/
```

```bash
lerna publish
```

```bash
# 3005 dev template & all demos
pnpm run -C apps/aelf-template dev
# 3006 socket
pnpm run -C apps/server-socket-io dev
# 3007 chaingpt
pnpm run -C apps/server-chaingpt start:dev
```
