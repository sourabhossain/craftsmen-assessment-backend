const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const CONFIG = require('./config/config');
const errorHandler = require('./helpers/error.handlers');
const connectWithMongoDB = require('./config/db');
const swaggerDocument = require('./../swagger.json');
const apiV1 = require('./apiV1/index');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/v1', apiV1);
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler.notFound);
app.use(errorHandler.internalServerError);

app.listen(CONFIG.PORT, () => {
    console.debug(`Server Started at ${CONFIG.PORT}`);
    connectWithMongoDB();
});
