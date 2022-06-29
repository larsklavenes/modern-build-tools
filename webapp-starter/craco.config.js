const { whenDev } = require('@craco/craco')
/**
 *  This file allows us to tweak the create-react-app webpack config(s)
 *  without using 'eject' and without creating a fork of the react-scripts.
 *  https://github.com/gsoft-inc/craco
 */
// typescript-plugin-styled-components https://github.com/Igorbek/typescript-plugin-styled-components
const createStyledComponentsTransformer =
  require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createStyledComponentsTransformer()
const StylelintPlugin = require('stylelint-webpack-plugin')
module.exports = {
  webpack: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: !!process.env.TRANSPILE_ONLY,
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
    ],
    plugins: whenDev
      ? [new StylelintPlugin({ files: ['**/*.tsx', '**/*.ts'] })]
      : undefined,
  },
}
