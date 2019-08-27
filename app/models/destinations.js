const mongoose = require('mongoose')

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  time_spent: {
    type: String
  },
  pit: {
    type: String,
    required: true
  },
  peak: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    max: 5,
    min: 0
  },
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Destination', destinationSchema)
