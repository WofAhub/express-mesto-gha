// const { celebrate, Joi } = require('celebrate');

// const validationLogin = celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required(),
//   }),
// });

// const validationCreateUser = celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required(),
//     name: Joi.string().required().min(2).max(30),
//     about: Joi.string().required().min(2).max(30),
//     avatar: Joi.string().required(),                    // что-то должно быть ещё
//   }),
// });

// const validationGetUserId = celebrate({
//   params: