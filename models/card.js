// const mongoose = require('mongoose');

// const cardSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: true,
//   },
//   ownner: {
//     type: ObjectId,
//     ref: 'user',
//     required: true,
//   },
//   likes: [{
//     type: ObjectId,
//     ref: 'user',
//     default: [],
//   }],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// })

// module.exports = mongoose.model('card', cardSchema);