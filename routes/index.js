import AppController from '../controllers/AppController';

const express = require('express');

export default function Routes(app) {
  const router = express.Router();

  app.use('/', router);

  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });
}
