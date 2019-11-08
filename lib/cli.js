#!/usr/bin/env node
'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _shelljs = require('shelljs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-process-exit */

const packageJson = require(_path2.default.resolve(__dirname, '../package.json'));

_commander2.default.version(packageJson.version).usage('<command> [<args>]');

_commander2.default.command('install').description('Install all empathy dependencies').action(() => {
 
  console.warn('');
  console.warn(`Running... please wait...`);
  console.warn('');

  var peers = '';

  Object.keys(packageJson.peerDependencies).forEach(function(key, index) {
    peers += `${key} `;
  });

  if (_shelljs.exec(`npm install ${peers}--save`).code !== 0) {
    console.warn('\x1b[31m%s\x1b[0m', `Error: Unable to install empathy v${packageJson.version} dependencies`);
    _process2.default.exit();
  }

  console.warn('');
  console.warn('\x1b[32m%s\x1b[0m', `✅ Empathy v${packageJson.version} dependencies installed successfully!`);
  console.warn('');
  console.warn('');

  _process2.default.exit();
});

_commander2.default.command('*', null, {
  noHelp: true
}).action(() => {
  _commander2.default.help();
});

_commander2.default.parse(_process2.default.argv);

if (_commander2.default.args.length === 0) {
  _commander2.default.help();
  _process2.default.exit();
}