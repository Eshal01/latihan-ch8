const playerRouter = require("./player.routes");
const webRouter = require("./web.routes");
const v1 = require("express").Router();

v1.get("/", (_, res) => {
  res.send("from v1");
});

v1.use("/players", playerRouter);
v1.use("/dashboard", webRouter);

module.exports = v1;
