import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import * as log from './helpers/log';

import config from '../config.global';
import requestId from './middleware/requestId';
import responseHandler from './middleware/responseHandler';
import router from './routes';

const app = new Koa();

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

app.use(logger());
app.use(bodyParser());
app.use(requestId());
app.use(helmet());
app.use(cors({
  exposeHeaders: ['X-Request-Id']
}));
app.use(responseHandler());
app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', err => log.error(`Unhandled exception occured. message: ${err.message}`));

if (!module.parent) {
  app.listen(config[env].port, config[env].host, () => {
    log.info(`API server listening on ${config[env].host}:${config[env].port}, in ${env}`);
  });
}

module.exports = app;

