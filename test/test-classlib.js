/*global before describe it*/
'use strict';

const fs = require('fs-extra');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('node-typescript:classlib', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/classlib'))
      .inTmpDir(function (dir) {
        fs.outputFileSync(
          path.join(dir, 'src/index.ts'),
          'import * from \'some-library\';'
        );
        fs.outputFileSync(
          path.join(dir, 'test/index-tests.ts'),
          'import * as index from \'../src/index\';'
        );
      })
      .withArguments(['CustomerInventoryItem'])
      .withOptions({
        skipInstall: true
      })
      .on('end', done);
  });

  it('creates classlib files', function () {
    assert.file([
      'src/customer-inventory-item.ts',
      'src/index.ts',
      'test/customer-inventory-item-tests.ts',
      'test/index-tests.ts'
    ]);
  });
});
