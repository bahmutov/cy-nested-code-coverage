Example using Cypress in subfolder, while the code coverage report tool `nyc` is installed in the root folder.

Run Cypress tests

```shell
npm run cy:open
```

See [cypress-io/code-coverage](https://github.com/cypress-io/code-coverage) and [Cypress code coverage guide](https://on.cypress.io/code-coverage).

Note: to see debug messages from code coverage plugin, run it with

```shell
DEBUG=code-coverage npm run cy:open
```
