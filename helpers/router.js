const express = require('express');
const Index = require('../controllers/Index');

const routerClass = express.Router;

// =========================
// Routes
// =========================
const route = (app) => {
  const routerOptions = {
    mergeParams: true,
  };
  const router = routerClass(routerOptions);
  router.get('/', Index.list);
  router.get('/search', Index.search);

  // Set url for API group routes
  app.use(router);
};

module.exports = route;
