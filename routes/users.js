const router = require('express').Router();
const {
  getUsersAll,
  createUser,
  getUserById
} = require('../controllers/user')

router.get('/users', getUsersAll);
router.post('/users', createUser);
router.get('/users/:userId', getUserById)

module.exports = router;