const router = require('express').Router();
const {
  getUsersAll,
  getUserById,
  updateUser,
  updateUserAvatar,
  getMe,
} = require('../controllers/users');

const {
  validationUpdateAvatar,
  validationUpdateUser
} = require('../middlewares/validation');

// получаем текущего пользователя
router.get('/users/me', getMe);

// все пользователи
router.get('/users', getUsersAll);

// пользователь
router.get('/users/:id', getUserById);

// обновляем профиль
router.patch('/users/me', validationUpdateUser, updateUser);

// обновляем аватар
router.patch('/users/me/avatar', validationUpdateAvatar, updateUserAvatar);

module.exports = router;
