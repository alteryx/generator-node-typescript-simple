# TypeScript NodeJS Generator

I use:

- _simple package.json scripts_  - as task runner.
- _mocha_ - test framework.
- _chai_- assertion library.
- _tslint_- configured to use airbnb.
- _prettier_- integrated with tslint for easy autoformatting.
- **no global dependencies**. Every dependency such as _TypeScript_ and _tslint_ is installed as local dev dependency allowing you to freely use different versions.

## Usage

Install `generator-node-typescript-simple` globally.

```sh
$yarn add global generator-node-typescript-simple
```

Create a new directory and `cd` into it.

```sh
$mkdir my-new-project && cd $_

```

Run the generator.

```sh
$yo node-typescript-simple
```

Generate a new class and test file.

```sh
$yo node-typescript:classlib MyNewClass [--mocha | --ava]
```

  ### Integration with VS Code
- I configure `build`, `clean`, `lint`, `coverage`, `format` and `test` tasks that you can run using `Run Task` option.
- You can directly run currently open source file using task `Run current file`. I use [ts-node](https://github.com/TypeStrong/ts-node) to provide this functionality.
- You can debug currently open source file using `Debug file` launch configuration. You can also debug currently open test file using `Debug test` launch configuration without the need of compiling it first. Here is the preview -

  ![TypeScript debugging in VS Code](./img/vscode-ts-debug.gif)

