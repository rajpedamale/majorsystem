import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import historyApiFallback from "connect-history-api-fallback";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "../webpack.config.dev";
import logger from "./logger";

const port = 3000;
const app = express();
const bundler = webpack(config);

app.use(historyApiFallback());

app.use(
  webpackDevMiddleware(bundler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(bundler));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/client/index.html"));
});

app.listen(port, err => {
  if (err) {
    logger.log({ level: "error", message: err });
  } else {
    open("http://localhost:" + port);
  }
});
