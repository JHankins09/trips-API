const express = require('express')
const passport = require('passport')

const Trip = require('../models/trips.js')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /trips
router.get('/trips', requireToken, (req, res, next) => {
  Trip.find()
    .populate('destinations')
    .then(trips => {
      return trips.map(trip => trip.toObject())
    })
    .then(trips => res.status(200).json({ trips: trips }))
    .catch(next)
})

// SHOW
// GET /trips/5a7db6c74d55bc51bdf39793
router.get('/trips/:id', requireToken, (req, res, next) => {
  Trip.findById(req.params.id)
    .populate('destinations')
    .then(handle404)
    .then(trip => res.status(200).json({ trip: trip.toObject() }))
    .catch(next)
})

// CREATE
// POST /trips
router.post('/trips', requireToken, (req, res, next) => {
  // set owner of new trip to be current user
  req.body.trip.owner = req.user.id

  Trip.create(req.body.trip)
    .then(trip => {
      res.status(201).json({ trip: trip.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /trips/5a7db6c74d55bc51bdf39793
router.patch('/trips/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.trip.owner

  Trip.findById(req.params.id)
    .then(handle404)
    .then(trip => {
      requireOwnership(req, trip)
      return trip.update(req.body.trip)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /trips/5a7db6c74d55bc51bdf39793
router.delete('/trips/:id', requireToken, (req, res, next) => {
  Trip.findById(req.params.id)
    .then(handle404)
    .then(trip => {
      requireOwnership(req, trip)
      trip.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
