// const база
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

// const миддлвеир
const limiter = require('./middlewares/rateLimit');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

// const роуты
const userRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const error404 = require('./routes/error404');
const authAndRegisterRouter = require('./routes/auth');

// const сервер
const { PORT = 3000 } = process.env;
const app = express();

// app.use база
app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use логин и регистрация
app.use(authAndRegisterRouter);

// app.use роуты
app.use(auth);
app.use(userRouter);
app.use(cardsRouter);
app.use(error404);

app.use(errors());

// дефолтный обработчик ошибок
app.use(errorHandler);

// подсоединение к mongoose -> подключение к серверу
mongoose.connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => {
    console.log('Подключение к базе состоялось'); // eslint-disable-line

    app.listen(PORT, () => {
      console.log(`Приложение прослушивается на порте ${PORT}`); // eslint-disable-line
    });
  })

  .catch((err) => {
    console.log('Ошибка подключения к базе', err); // eslint-disable-line

    process.exit();
  });
