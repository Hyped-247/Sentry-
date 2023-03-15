const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: path.join(__dirname, '/frontend/src/app.js'),
        devtool: "source-map",
        output: {
            path: path.join(__dirname, '/frontend/static/frontend/'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: { sourceMap: true },
                            },
                            {
                                loader: 'sass-loader',
                                options: { sourceMap: true },
                            },
                        ],
                    }),
                },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|mov|mp4)(\?[a-z0-9=.]+)?$/,
                    loader: 'url-loader?limit=100000000',
                },
            ],
        },
        resolve: {
            alias: { cldr$: 'cldrjs', cldr: 'cldrjs/dist/cldr' },
        },
        plugins: [CSSExtract,
            new SentryWebpackPlugin({
                release: "testRelease",
                org: "ORGg",
                project: "PROJECT",
                authToken: 'AUTHTOKEN',
                urlPrefix: "~/static"
              })],
        // devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, '/frontend/static/frontend/'),
            historyApiFallback: true,
            publicPath: '/frontend/',
            hot: true,
        },
    };
};
