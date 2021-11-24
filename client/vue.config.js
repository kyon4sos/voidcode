module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "localhost:3000",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
