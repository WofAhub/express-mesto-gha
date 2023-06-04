// const база
const mongoose = require('mongoose');
const User = require('../models/user');

// const ошибки
const ValidationError = require('../errors/ValidationError');
const UnhandleError = require('../errors/UnhandleError');
const NotFoundError = require('../errors/NotFoundError');

// получаем всех пользователей
module.exports.getUsersAll = (req, res, next) => {
  User
    .find({})
    .orFail(() => {
      throw new NotFoundError('Пользователи не найдены')
    })
    .then(users => res.status(200).send({ data: users }))
    .catch((err) => {
      next(err)
    });
}

// получаем пользователя по id
module.exports.getUserById = (req, res, next) => {
  User
    .findById(req.params.id)
    .orFail(() => {
      throw new NotFoundError('Пользователь не найден')
    })

    .then(user => res
      .status(200)
      .send({ data: user })
    )

    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new ValidationError('Некорректный id пользователя'));
      }

      return next(err);
    })

    .catch((err) => {
      next(err)
    });
};

// создаем пользователя
module.exports.createUser = (req, res, next) => {
  console.log(req.user._id);
  const { name, about, avatar } = req.body;

  User
    .create(
      {
        name,
        about,
        avatar,
      },
    )
    .then(user => res.status(200).send({ data: user }))

    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        const errorFields = Object.keys(err.errors);
        const errorMessage = err.errors[errorFields[0]].message;

        throw new ValidationError(errorMessage)
      }

      throw new UnhandleError('Сервер сейчас не отвечает. Подождите, когда он снова заработает')
    })

    .catch((err) => {
      next(err)
    });
};


// обновляем пользователя
module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;

  User
    .findByIdAndUpdate(req.user._id, { name, about },
      {
        new: true,
        runValidators: true,
        upsert: false,
      },
    )
    .then(user => res.status(200).send({ data: user }))

    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        const errorFields = Object.keys(err.errors);
        const errorMessage = err.errors[errorFields[0]].message;

        throw new ValidationError(errorMessage)
      }

      throw new UnhandleError('Сервер сейчас не отвечает. Подождите, когда он снова заработает')
    })

    .catch((err) => {
      next(err)
    });
};

// обновляем аватар пользователя
module.exports.updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User
    .findByIdAndUpdate(
      req.user._id,
      {
        avatar
      },
      {
        new: true,
        runValidators: true,
      },
    )
    .then(user => res.status(200).send({ data: user }))

    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        const errorFields = Object.keys(err.errors);
        const errorMessage = err.errors[errorFields[0]].message;

        throw new ValidationError(errorMessage)
      }

      throw new UnhandleError('Сервер сейчас не отвечает. Подождите, когда он снова заработает')
    })

    .catch((err) => {
      next(err)
    });
};