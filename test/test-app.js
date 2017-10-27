/*global before describe it*/
'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('node-typescript:app with mocha', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true,
        mocha: true
      })
      .on('end', done);
  });

  it('creates project files', function () {
    assert.file([
      '.vscode/tasks.json',
      '.vscode/settings.json',
      'src/greeter.ts',
      'src/index.ts',
      'test/greeter-tests.ts',
      'test/index-tests.ts',
      'package.json',
      'tsconfig.json',
      'tslint.json',
      '.editorconfig',
      'README.md'
    ]);
  });
});
