const CracoAlias = require("craco-alias");

// craco.config.js
module.exports = {
    style: {
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                tsConfigPath: "tsconfig.paths.json",
            },
        },
    ],
    webpack: { configure: { devtool: "cheap-module-source-map" } },
};
