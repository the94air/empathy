import extensions from 'rollup-plugin-extensions';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import filesize from 'rollup-plugin-filesize';
import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

export default [
	{
		input: [
      'src/demo/javascript/app.js'
    ],
		output: {
			name: 'Empathy',
			file: 'demo/javascript/app.js',
      format: 'umd',
      sourcemap: true,
		},
		plugins: [
      extensions({
        extensions: ['.js', '.vue', '.json'],
      }),
			resolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.VUE_ENV': JSON.stringify('browser')
      }),
      vue(),
      copy({
        targets: [
          { src: 'src/favicons/**/*', dest: 'demo' },
          { src: 'src/images', dest: 'demo' }
        ]
      }),
      filesize(),
      terser({
        sourcemap: true,
      }),
		]
  },
  {
    input: [
      'src/demo/sass/app.scss'
    ],
		output: {
			name: 'Empathy',
			file: 'demo/css/app.css',
      sourcemap: true,
		},
		plugins: [
      scss(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: ['.scss','.css'],
        extract: true,
        minimize: isProduction,
        // modules: true,
      }),
      filesize(),
      terser({
        sourcemap: true,
      }),
		]
  }
];