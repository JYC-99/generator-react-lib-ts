# generator-react-lib-ts
Yeoman generator for react lib with typescript

## Installation

```bash
yarn add yo -D
yarn add generator-react-lib-ts -D
```

You may want to install them globally if you are going to use them directly in the console.

## Generating a new component

```bash
# make sure yo and generator-react-lib-ts is installed globally or let npm/scripts to do it.
yo react-lib-ts

# Then the generator will ask you to input the name of your library, the path for your lib folder,
# and let you choose the type for your library.

```
## Usage

The following commands are available in your project:

```bash
# build your library. The output is uglified umd bundle with source map files.
yarn build

# run tests. Powered by jest.
yarn test

# linting your code.
yarn run lint

# start local live demo page with HMR support.
yarn run dev
```

## Release notes

### 1.3.0

- If you want to create a component based on fabric-ui, you will see the option to support it!

### 1.2.0

- Upgrading to react 16.8.2
- Adding functional component with react hooks template
- Fixed tsconfig issues and tslint issues.

### 1.1.0

- Embrace babel to compile typescript. ts-loader deprecated.
- Allow "yarn run dev" to start a live demo page on your localhost:8080 with HMR support.
- Update docs
