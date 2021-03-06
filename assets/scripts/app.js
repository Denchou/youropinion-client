'use strict'

const authHandler = require('./auth/events.js')
const reviewHandler = require('./review/events.js')
const store = require('./store')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // listener to limit the length of articles to 280 characters
  $('#characterLeft').text('280 characters left')
  $('#reviewInput').keydown(function () {
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

  // $('#reviewModal').on('hidden.bs.modal', function (e) {
  //   $('#topic').html('')
  // })
  store.update = false
  // listener for sign up, sign in and review buttons
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.pw').hide()
  $('#submitModal').hide()
  $('#myReviews').hide()
  $('#sign-up').on('submit', authHandler.onSignUp)
  $('#sign-in').on('submit', authHandler.onSignIn)
  $('#sign-out').on('submit', authHandler.onSignOut)
  $('#change-password').on('submit', authHandler.onChangePassword)
  $('#all-reviews').on('submit', reviewHandler.onAllReviews)
  $('#review').on('click', '.close', reviewHandler.onCloseReviews)
  $('#review').on('click', '.delete', reviewHandler.onDeleteReview)
  $('#review').on('click', '.update', reviewHandler.onUpdateReview)
  $('#reviewForm').on('submit', reviewHandler.onSubmitReview)
  $('#myReviews').on('click', reviewHandler.onMyReviews)
  $('#submitForm').show()
  $('#updateForm').hide()
  $('#submitModal').on('click', reviewHandler.modalReset)
  $('#ca').on('click', () => $('#collapseSignIn').collapse('hide'))
  $('#si').on('click', () => $('#collapseSignUp').collapse('hide'))
})
