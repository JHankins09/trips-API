const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  destinations: [{
      type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination'
  }],
  completed: {
    type: Boolean,
    required: true
  },
  private: {
    type: Boolean,
    required: true
  },
  type: {
    type: String,
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

module.exports = mongoose.model('Trip', tripSchema)
