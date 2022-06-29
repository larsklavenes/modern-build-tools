const { whenDev } = require('@craco/craco')
/**
 *  This file allows us to tweak the create-react-app webpack config(s)
 *  without using 'eject' and without creating a fork of the react-scripts.
 *  https://github.com/gsoft-inc/craco
 */
// typescript-plugin-styled-components https://github.com/Igorbek/typescript-plugin-styled-components
const CracoEsbuildPlugin = require('craco-esbuild')
const StylelintPlugin = require('stylelint-webpack-plugin')
const { ProvidePlugin } = require('webpack')

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        esbuildLoaderOptions: {
          // Optional. Defaults to auto-detect loader.
          loader: 'tsx', // Set the value to 'tsx' if you use typescript
        },
        // Set to true to avoid 'ReferenceError: React is not defined' when running tests
        skipEsbuildJest: true, // Optional. Set to true if you want to use babel for jest tests,
      },
    },
  ],
  webpack: {
    // jsx transform is not supported by craco-esbuild
    // inject react imports instead
    // This workaround: https://github.com/pradel/create-react-app-esbuild/issues/7
    // Main esbuild issue: https://github.com/evanw/esbuild/issues/334
    plugins: [
      new ProvidePlugin({ React: 'react' }),
      whenDev
        ? new StylelintPlugin({ files: ['**/*.tsx', '**/*.ts'] })
        : undefined,
    ],
  },
}
