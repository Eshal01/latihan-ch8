const apiRouter = require("express").Router();
const v1 = require("./v1");
const apiSwagger = require('./swagger-ui')

apiRouter.get("/", (req, res) => {
  res.send("test");
});

apiRouter.use("/v1", v1);
apiRouter.use('/', apiSwagger)

module.exports = apiRouter;
