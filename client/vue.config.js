module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
    host: 'localhost',
    port: 8081,
    watchOptions: {
        poll: true
    }
  }
}