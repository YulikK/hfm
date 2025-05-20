export default {
  root: 'src',
  build: {
    outDir: 'dist',
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehavior: 'local',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
};
