import Router from 'koa-router';

import mockController from './controllers/mock.controller';

const router = new Router();
router.get('/api/get-welcome', mockController.welcome);

module.exports = router;
