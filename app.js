// const база
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

// const миддлвеир
const auth = require('./middlewares/auth');

// const роуты
const userRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const error404 = require('./routes/error404');
const authAndRegisterRouter = require('./routes/auth');

// const сервер
const { PORT = 3000 } = process.env;
const app = express();

// app.use база
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
app.use((err, req, res, next)  => { // eslint-disable-line
  console.log('Дефолтный обработчик ошибок', err); // eslint-disable-line
  const { statusCode = 500, message = 'Ошибка' } = err;
  res.status(statusCode).send({ message });
});

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
