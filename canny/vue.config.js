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
            port: 8502
        },
        externals: ["vue", /^@lenna-project\/.+/]
    },
    filenameHashing: false,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/lenna-plugins/canny'
    : '/'
};
