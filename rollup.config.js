var pjson = require('./package.json')
import git from 'git-rev-sync'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/topolis.js',
  format: 'umd',
  moduleName: 'topolis',
  plugins: [
    replace({
      npm_package_version: pjson.version,
      git_hash: git.short()
    }),
    babel({
      presets: ['es2015-rollup'],
      babelrc: false
    }),
    nodeResolve(),
    commonjs()
  ]
}
