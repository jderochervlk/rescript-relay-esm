# Error
```
 We've found a bug for you!
  /home/josh/Dev/relay-esm/node_modules/rescript-relay/src/RescriptRelay.res

  The implementation /home/josh/Dev/relay-esm/node_modules/rescript-relay/src/RescriptRelay.res
  does not match the interface src/RescriptRelay.cmi:
  ...
  In module Context.Provider:
  The type `props' is required but not provided
  /home/josh/Dev/relay-esm/node_modules/rescript-relay/src/RescriptRelay.resi:814:5-817:5:
    Expected declaration
```

## Steps to reproduce
- `npm install`
- `npm run res:dev`