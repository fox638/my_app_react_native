module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@app/*': './src/app/*',
          '@shared': './src/shared',
          '@shared/*': './src/shared/*',
          '@screens': './src/screens',
          '@screens/*': './src/screens/*',
          '@widgets': './src/widgets',
          '@widgets/*': './src/widgets/*',
          '@entities': './src/entities',
          '@entities/*': './src/entities/*',
          '@features': './src/features',
          '@features/*': './src/features/*',
          '@assets': './src/assets',
          '@assets/*': './src/assets/*',
        },
      },
    ],
  ],
};
