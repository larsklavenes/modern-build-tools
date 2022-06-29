const { whenDev } = require('@craco/craco')
/**
 *  This file allows us to tweak the create-react-app webpack config(s)
 *  without using 'eject' and without creating a fork of the react-scripts.
 *  https://github.com/gsoft-inc/craco
 */
const CracoSwcPlugin = require('craco-swc')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: 'es5',
            parser: {
              syntax: 'typescript',
              tsx: true,
              dynamicImport: true,
              exportDefaultFrom: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        },
      },
    },
  ],
  webpack: {
    plugins: whenDev
      ? [new StylelintPlugin({ files: ['**/*.tsx', '**/*.ts'] })]
      : undefined,
  },
}
