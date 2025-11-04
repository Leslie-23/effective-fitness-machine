const { getDefaultConfig } = require('@expo/metro-config')
const path = require('path')

const config = getDefaultConfig(__dirname)

// Fix SVG imports
config.transformer = {
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  assetPlugins: ['expo-asset/tools/hashAssetFiles']
}

config.resolver.assetExts = config.resolver.assetExts.filter(
  ext => ext !== 'svg'
)
config.resolver.sourceExts.push('svg')

// Polyfill Node modules like "url"
config.resolver.extraNodeModules = {
  url: require.resolve('react-native-url-polyfill'),
  http: require.resolve('react-native-url-polyfill'),
  https: require.resolve('react-native-url-polyfill')
}

module.exports = config
