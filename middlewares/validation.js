const { celebrate, Joi } = require('celebrate');

// логин юзера
const validationLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

// создание юзера
const validationCreateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri(),
  }),
});

// обновление автара
const validationUpdateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().uri(),
  }),
});

// обновление профиля
const validationUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

// создание карточки
const validationCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().uri(),
  }),
});

module.exports = {
  validationLogin,
  validationCreateUser,
  validationCreateCard,
  validationUpdateAvatar,
  validationUpdateUser,
};
