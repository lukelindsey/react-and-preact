module.exports = {
  entry: {
    ReactMain: "./src/index.tsx",
    PreactMain: "./src/PreactMain.tsx"
  },
  output: {
    filename: "Scripts/generated/[name].js",
    libraryTarget: "umd"
  },
  module: {
    rules: [{
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader"
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        use: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    modules: [__dirname, "node_modules"]
  },
  plugins: [],
  watch: false
};