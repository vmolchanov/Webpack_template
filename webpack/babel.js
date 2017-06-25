module.exports = paths => {
    return {
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    include: paths,
                    use: "babel-loader"
                }
            ]
        }
    };
}

