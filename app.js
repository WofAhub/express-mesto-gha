// const база
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const роуты
const userRouter = require('./routes/users');
const error404 = require('./routes/error404')

// const сервер
const { PORT = 3000 } = process.env;
const app = express();

// app.use база
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// базовый Id пользователя
app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133'
  };

  next();
});

// app.use роуты
app.use(userRouter);
app.use(error404);

// дефолтный обработчик ошибок
app.use(( err, req, res, next ) => {
  console.log('Дефолтный обработчик ошибок', err);
  const { statusCode = 500, message = 'Ошибка' } = err;
  res.status(statusCode).send({ message: message })
})

// подсоединение к mongoose -> подключение к серверу
mongoose.connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => {
    console.log('Подключение к базе состоялось')

    app.listen(PORT, () => {
      console.log(`Приложение прослушивается на порте ${PORT}`)
    })
  })

  .catch((err) => {
    console.log('Ошибка подключения к базе', err)

    process.exit();
  })
