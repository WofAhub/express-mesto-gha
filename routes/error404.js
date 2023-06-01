const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');

// 404
router.use((req, res) => {
  throw new NotFoundError('Страница не найдена')
});

module.exports = router;
