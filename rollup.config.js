import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './src/main.js',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'Vue',
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
};
