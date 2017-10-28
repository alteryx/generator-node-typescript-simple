# TypeScript NodeJS Generator
This is a slightly more opinionated version of [generator-node-typescript](https://github.com/ospatil/generator-node-typescript). Thanks to ospatil for all his hard work! 

## Details

- _package.json scripts_  - simplified task runner.
- _yarn_- package manager.
- _mocha_ - test framework.
- _chai_- assertion library.
- _tslint_- configured to use the [airbnb styleguide](https://github.com/progre/tslint-config-airbnb) with the following exceptions:
  - _[import-name](https://www.npmjs.com/package/tslint-microsoft-contrib)_ rule disabled - js files are normally lowercase, class names are PascalCase. This is a recipe for this rule becoming a royal pain. Disabling it.
- _prettier_- integrated with tslint for easy autoformatting.
- **enterprise friendly** - package is private by default so you don't accidentally publish to public registry. Uses [license-to-fail](https://www.npmjs.com/package/license-to-fail) to automatically fail your build if it detects a license not on your white-list.
- **no global dependencies**. Every dependency such as _TypeScript_ and _tslint_ is installed locally.

## Usage

Make sure you have yeoman installed globally if you don't already.
```sh
yarn add global yo
```
Clone `generator-node-typescript-simple` and install its dependencies.

```sh
git clone https://github.com/alteryx/generator-node-typescript-simple.git
cd generator-node-typescript-simple
yarn
```

Create your new project directory somewhere and `cd` into it.
```sh
mkdir my-new-project
cd ny-new-project
```

Path to and run the app generator.

```sh
$yo path/to/repo/generator-node-typescript-simple/generators/app
```

That's it! Keep reading for more details if you are interested but at this point you are ready to get started. Take a look at the package.json [scripts](##Scripts) for more info.

## What gets generated?
```
project/
├── lib/
├── package.json
├── README.md
├── src/
│   ├── greeter.ts
│   └── index.ts
├── test/
│   ├── greeter-tests.ts
│   └── index-tests.ts
├── tsconfig.json
├── tslint.json
├── license-config.json
└── yarn.lock
```
## Options

--license - The package.json license
```
$yo node-typescript-simple --license MIT 
```

--author - The package.json author
```
$yo node-typescript-simple --author Bob 
```
## Scripts

```
  "scripts": {
    "clean": "rimraf lib",
    "format": "prettier --write --single-quote \"{src,test}/**/*.ts\"",
    "lint": "tslint --force --project tsconfig.json --format verbose \"src/**/*.ts\"",
    "prepublish": "yarn run build && yarn licenses generate-disclaimer > licenses.txt",
    "build": "yarn run license-check && yarn run format && yarn run clean && yarn run lint && echo Using TypeScript && tsc --version && tsc --pretty",
    "debug": "node --inspect --inspect-brk ./lib/index.js",
    "test": "yarn run build && mocha --compilers ts:ts-node/register --recursive \"test/**/*-tests.ts\"",
    "test:nyan": "yarn run test -- --reporter nyan",
    "test:tap": "yarn run test -- --reporter tap",
    "coverage": "nyc --include=\"src/**/*.ts\" --reporter=text --reporter=html --reporter=lcov mocha --compilers ts:ts-node/register --recursive \"test/**/*-test.ts\"",
    "watch": "yarn run build -- --watch",
    "watch:test": "yarn run test -- --watch",
    "license-check": "license-to-fail ./license-config.js"
  }
```

You can generate a new class and test file at any point.

```sh
$yo path/to/repo/generator-node-typescript-simple/generators/classlib MyNewClass
```

  ### Integration with VS Code
- `build`, `clean`, `lint`, `coverage`, `format` and `test` tasks are all available through the `Run Task` option.
- You can directly run currently open source file using task `Run current file`. I use [ts-node](https://github.com/TypeStrong/ts-node) to provide this functionality.

  ![TypeScript debugging in VS Code](./img/vscode-ts-debug.gif)

