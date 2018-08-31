'use strict'

const authHandler = require('./auth/events.js')
const reviewHandler = require('./review/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.pw').hide()
  $('#sign-up').on('submit', authHandler.onSignUp)
  $('#sign-in').on('submit', authHandler.onSignIn)
  $('#sign-out').on('submit', authHandler.onSignOut)
  $('#change-password').on('submit', authHandler.onChangePassword)
  $('#all-reviews').on('submit', reviewHandler.onAllReviews)
})
