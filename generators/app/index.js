'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const _ = require('lodash');
const shelljs = require('shelljs');

module.exports = Generator.extend({
  initializing: function () {
    const done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the minimal but opinionated ' + chalk.red('Node TypeScript') + ' generator!'
    ));

    this.log(
      chalk.cyan('I simply get down to business of generating, no questions asked!')
      + '\n'
      + chalk.yellow('Libraries you ask? I use package.json scripts as a task runner and mocha for testing. I use tslint configured with the airbnb styleguide.')
      + '\n'
      + chalk.gray('Can you change these? Of course, it\'s your code. I get out of the way after scaffolding.')
    );

    this.composeWith(
      require.resolve('../classlib'),
      Object.assign({ arguments: ['Greeter'] }, this.options)
    );

    done();
  },

  writing: {

    vsCodeFiles: function () {
      this.fs.copy(
        this.templatePath('_vscode/tasks.json'),
        this.destinationPath('.vscode/tasks.json')
      );
      this.fs.copy(
        this.templatePath('_vscode/settings.json'),
        this.destinationPath('.vscode/settings.json')
      );
    },

    rootFiles: function () {
      const today = new Date();

      this.fs.copyTpl(
        this.templatePath('_package_mocha.json'),
        this.destinationPath('package.json'),
        {
          appname: _.kebabCase(path.basename(process.cwd())),
          license: this.options['license'],
          author: this.options['author']
        }
      );

      // copy files common for all configurations
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );
      this.fs.copy(
        this.templatePath('_tsconfig.json'),
        this.destinationPath('tsconfig.json')
      );
      this.fs.copy(
        this.templatePath('_tslint.json'),
        this.destinationPath('tslint.json')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('license-config.js'),
        this.destinationPath('license-config.js')
      );
    }
  },

  install: {
    npmInstall: function () {
      const generator = this;
      if (shelljs.which('yarn')) {
        generator.yarnInstall();
      } else {
        generator.npmInstall(null, { skipInstall: this.options['skip-install'] });
      }
    }
  }
});
