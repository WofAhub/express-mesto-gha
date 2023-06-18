const router = require('express').Router();
const {
  getUsersAll,
  getUserById,
  updateUser,
  updateUserAvatar,
  getMe,
} = require('../controllers/users');

// получаем текущего пользователя
router.get('/users/me', getMe);

// все пользователи
router.get('/users', getUsersAll);

// пользователь
router.get('/users/:id', getUserById);

// обновляем профиль
router.patch('/users/me', updateUser);

// обновляем аватар
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
