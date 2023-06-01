// const Card = require('../models/card');

// module.exports.getCard = (req, res) => {
//   Card.find({})
//     .populate('user')
//     .then(card => res.status(200).send({data: card}))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({message: err.message})
//     })
// };

// module.exports.createCard = (req, res) => {
//   const { name, link, userId } = req.body;

//   Card.create({name, link, user: userId})
//     .then(card => res.status(200).send({data: card}))
//     .catch(err => res.status(500).send({message: err.message}))
// };