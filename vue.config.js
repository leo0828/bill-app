module.exports = {
    devServer: {
        open: true,
    },
    productionSourceMap: false,
    chainWebpack: config => {
        config.module
            .rule("csv")
            .test(/\.csv$/)
            .use('graphql-tag/loader')
            .loader('csv-loader')
            .options({
                dynamicTyping: true,
                header: true,
                skipEmptyLines: true
            })
            .end()
    }
}