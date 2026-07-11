import path from "node:path";
import { fileURLToPath } from "url";
import webpack from "webpack";

// in case you run into any TypeScript error when configuring `devServer`
//import "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
  entry: "./ts/main.ts",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "play-live-chat.js",
    path: path.resolve(__dirname, "./pkg/cplayer/"),
  },
};

export default config;