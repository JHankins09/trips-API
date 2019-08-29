const express = require('express')
const passport = require('passport')

const Destination = require('../models/destinations.js')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /destinations
router.get('/destinations', requireToken, (req, res, next) => {
  Destination.find()
    .populate('trip')
    .then(Destinations => {
      return Destinations.map(destination => destination.toObject())
    })
    .then(Destinations => res.status(200).json({ destination: Destinations }))
    .catch(next)
})

// SHOW
// GET /destinations/5a7db6c74d55bc51bdf39793
router.get('/destinations/:id', requireToken, (req, res, next) => {
  Destination.findById(req.params.id)
    .populate('trip')
    .then(handle404)
    .then(destination => res.status(200).json({ destination: destination.toObject() }))
    .catch(next)
})

// CREATE
// POST /destinations
router.post('/destinations', requireToken, (req, res, next) => {
  // set owner of new destination to be current user
  req.body.destination.owner = req.user.id

  Destination.create(req.body.destination)
    .then(destination => {
      res.status(201).json({ destination: destination.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /destinations/5a7db6c74d55bc51bdf39793
router.patch('/destinations/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.destination.owner

  Destination.findById(req.params.id)
    .then(handle404)
    .then(destination => {
      requireOwnership(req, destination)
      return destination.update(req.body.destination)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /destinations/5a7db6c74d55bc51bdf39793
router.delete('/destinations/:id', requireToken, (req, res, next) => {
  Destination.findById(req.params.id)
    .then(handle404)
    .then(destination => {
      requireOwnership(req, destination)
      destination.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
