const router = require('express').Router();
const {
  getUsersAll,
  getUserById,
  updateUser,
  updateUserAvatar,
  getMe,
} = require('../controllers/users');

// все пользователи
router.get('/users', getUsersAll);

// пользователь
router.get('/users/:id', getUserById);

// получаем текущего пользователя
router.get('/users/me', getMe);

// обновляем профиль
router.patch('/users/me', updateUser);

// обновляем аватар
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
