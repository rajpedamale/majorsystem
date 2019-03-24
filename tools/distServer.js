// This file configures a web server for testing the production build
// on your local machine.

// This file configures a web server for testing the production build
// on your local machine.

import express from "express";
import path from "path";
import open from "open";
import historyApiFallback from "connect-history-api-fallback";
import { chalkProcessing } from "./chalkConfig";
import logger from "./logger";

logger.log({
  level: "info",
  message: chalkProcessing("Opening production build...")
});

const port = 4000;
const app = express();

app.use(historyApiFallback());

app.use(express.static("dist"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, err => {
  if (err) {
    logger.log({ level: "error", message: err });
  } else {
    open(`http://localhost:${port}`);
  }
});
