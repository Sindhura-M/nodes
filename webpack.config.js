'use strict';

var _ = require('lodash');
var _configs = {

  // global section
  global: require(__dirname + '/config/webpack/global'),

  // config by enviroments
  production: require(__dirname + '/config/webpack/environments/build'),
  development: require(__dirname + '/config/webpack/environments/development'),
  test: require(__dirname + '/config/webpack/environments/build'),
  staging: require(__dirname + '/config/webpack/environments/build')
};

var _load = function() {
  var ENV = process.env.NODE_ENV
    ? process.env.NODE_ENV
    : 'production';

  console.log('Current Environment: ', ENV);

  // load config file by environment
  return _configs && _.merge(
    _configs.global(__dirname),
    _configs[ENV](__dirname, ENV)
  );
};

module.exports = _load();
