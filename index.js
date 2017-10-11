const express = require('express');
const pmx = require('pmx');
// const Db = require('./helpers/Db');

pmx.init({
  http: true, // HTTP routes logging (default: true)
  errors: true, // Exceptions loggin (default: true)
  custom_probes: true, // Auto expose JS Loop Latency and HTTP req/s as custom metrics
  network: true, // Network monitoring at the application level
});

const http = require('http');
const bodyParser = require('body-parser');
const compress = require('compression');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
const log = require('./helpers/log');
const router = require('./helpers/router');

const corsOptions = {
  origin: '*',
  credentials: true,
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Content-Length',
    'X-Requested-With',
    'X-HTTP-Method-Override',
  ],
  methods: [
    'GET', 'OPTIONS',
  ],
};

const app = express();

app
  .use(compress())
  .use(morgan(config.logger.express))
  .use(express.static(`${__dirname}/static`))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .use(cors(corsOptions));

const port = config.server.port;

http.createServer(app).listen(port);

// Create the DB connection
// Db.connect()
//   .then(() => {
log(chalk.bgBlue(`🔛  [SERVER]               Express listening on http://localhost:${port}`));
router(app);
// });
