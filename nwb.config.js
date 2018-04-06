module.exports = {
  type: "web-module",
  npm: {
    esModules: true,
    umd: {
      global: "console",
      externals: {}
    }
  }
};
