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
