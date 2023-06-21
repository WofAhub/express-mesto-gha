const router = require('express').Router();
const {
  getCard,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const {
  validationCreateCard,
  validationDeleteCard,
} = require('../middlewares/validation');

// получаем
router.get('/cards', getCard);

// создаем
router.post('/cards', validationCreateCard, createCard);

// удаляем
router.delete('/cards/:cardId', validationDeleteCard, deleteCard);

// лайк
router.put('/cards/:cardId/likes', likeCard);

// дизлайк
router.delete('/cards/:cardId/likes', dislikeCard);

module.exports = router;
