module.exports = {
    lintOnSave: false,
    configureWebpack: {
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            disableHostCheck: true,
            sockPort: 8502,
            sockHost: "localhost",
            https: true,
            port: 8502
        },
        externals: ["vue", "vue-router", /^@lenna-plugins\/.+/]
    },
    filenameHashing: false,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/lenna-plugins/canny'
    : '/'
};
