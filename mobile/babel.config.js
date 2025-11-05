module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@services': './src/services',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@storage': './src/storage',
            '@dtos': './src/dtos',
            '@utils': './src/utils',
            '@theme': './src/theme'
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg']
        }
      ]
    ]
  }
}
