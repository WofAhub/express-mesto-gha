const router = require('express').Router();
const {
  createUser,
  login,
} = require('../controllers/users');

// логин
router.post('/signin', login);

// регистрация
router.post('/signup', createUser);

module.exports = router;
