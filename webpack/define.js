'use strict';

const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const _root_ = path.resolve(__dirname, '../app');
const _dist_ = path.resolve(__dirname, '../dist');

const isDevelop = argv.env === 'develop' || argv.env !== 'release';
const isRelease = argv.env === 'release';

module.exports = {
    rs_root: _root_,
    rs_dist: _dist_,
    rs_release: isRelease,
    rs_develop: isDevelop
}