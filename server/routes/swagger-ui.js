const express = require('express');
const apiSwagger = express.Router();
const swaggerUI = require('swagger-ui-express');
const specs = require('../../apiSwagger.json');

apiSwagger.use('/api-doc', swaggerUI.serve, swaggerUI.setup(specs));

module.exports = apiSwagger;