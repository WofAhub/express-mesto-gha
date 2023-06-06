const router = require('express').Router();
const {
  getCard,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

// получаем
router.get('/cards', getCard);

// создаем
router.post('/cards', createCard);

// удаляем
router.delete('/cards/:cardId', deleteCard);

// лайк
router.put('/cards/:cardId/likes', likeCard);

// дизлайк
router.delete('/cards/:cardId/likes', dislikeCard);

module.exports = router;
