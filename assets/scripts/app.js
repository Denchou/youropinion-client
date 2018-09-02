'use strict'

const authHandler = require('./auth/events.js')
const reviewHandler = require('./review/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // listener to limit the length of articles to 280 characters
  $('#characterLeft').text('280 characters left')
  $('#message').keydown(function () {
    const max = 280
    const len = $(this).val().length
    if (len >= max) {
      $('#characterLeft').text('You have reached the limit')
      $('#characterLeft').addClass('red')
      $('#btnSubmit').addClass('disabled')
    } else {
      const ch = max - len
      $('#characterLeft').text(ch + ' characters left')
      $('#btnSubmit').removeClass('disabled')
      $('#characterLeft').removeClass('red')
    }
  })
  // listener for sign up, sign in and review buttons
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.pw').hide()
  $('#sign-up').on('submit', authHandler.onSignUp)
  $('#sign-in').on('submit', authHandler.onSignIn)
  $('#sign-out').on('submit', authHandler.onSignOut)
  $('#change-password').on('submit', authHandler.onChangePassword)
  $('#all-reviews').on('submit', reviewHandler.onAllReviews)
  $('#review').on('click', '.close', reviewHandler.onCloseReviews)
})
