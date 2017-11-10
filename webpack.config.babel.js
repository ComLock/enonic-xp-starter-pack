import glob from 'glob';
import path from 'path';


const SRC_RESOURCES_DIR = './src/main/resources';
//const SRC_RESOURCES_DIR_ABS = path.join(__dirname, SRC_RESOURCES_DIR);
const SRC_ASSETS_DIR = `${SRC_RESOURCES_DIR}/assets`;

const DST_RESOURCES_DIR = './build/resources/main';
const DST_RESOURCES_DIR_ABS = path.join(__dirname, DST_RESOURCES_DIR);

const ASSETS_ES6_GLOB = glob.sync(`${SRC_ASSETS_DIR}/**/*.es6`);
const ES6_GLOB = glob.sync(`${SRC_RESOURCES_DIR}/**/*.es6`, { absolute: false, ignore: ASSETS_ES6_GLOB });

let entry = ES6_GLOB.reduce((entries, entry) => Object.assign(entries, {[
    entry.replace(`${SRC_RESOURCES_DIR}/`, '').replace('.es6', '.js')
]: entry}), {});

entry['assets/js/scripts.js'] = `${SRC_ASSETS_DIR}/js/scripts.es6`;

const loaders = [
  {
    exclude: /(node_modules)/,
    loader: 'babel-loader',
    query: {
      presets: [ 'es2015' ]
    }
  }
];


module.exports = {
  entry,
  output: {
    path: DST_RESOURCES_DIR_ABS, // Must be absolute
    filename: "[name]"
  },
  module: {
    loaders
  }
};
//console.log(`module.exports:${JSON.stringify(module.exports, null, 2)}`)
