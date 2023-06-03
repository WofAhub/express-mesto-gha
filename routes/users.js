const router = require('express').Router();
const {
  getUsersAll,
  createUser,
  getUserById,
  updateUser,
  updateUserAvatar
} = require('../controllers/user')

// все пользователи
router.get('/users', getUsersAll);

// пользователь
router.get('/users/:id', getUserById)

// создаем
router.post('/users', createUser);

// обновляем профиль
router.patch('/users/me', updateUser);

// обновляем аватар
router.patch('/users/me/avatar', updateUserAvatar)

module.exports = router;