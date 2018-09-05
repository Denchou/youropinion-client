
const store = require('../store')

const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
  $('#message').html('Account successfully created! Please sign in to opiniate on things!')
  $('.collapse').collapse('hide')
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#sign-out').show()
}
const onSignUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('#message').html('Unable to create an account. Here are some troubleshooting tips:')
  $('#message').append('<li>Check to make sure your password confirmation matches your password.</li>')
  $('#message').append('<li>Ensure you are connected to the internet.</li>')
  $('#message').append('<li>The account may already exist. If you remember the password, select Sign In instead.')
}

const onSignInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  $('#message').html('You have successfully logged in! Got something to say?')
  $('.sign').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.pw').show()
  $('#submitModal').show()
  $('.landpage').collapse('hide')
  $('#myReviews').show()
  store.user = response.user
}
const onSignInFailure = function () {
  $('#sign-in').trigger('reset')
  $('#message').html('Unable to sign in. Here are some troubleshooting tips:')
  $('#message').append('<li>Check your Username and Password.</li>')
  $('#message').append('<li>Ensure you are connected to the internet.</li>')
}

const onSignOutSuccess = function () {
  $('#message').html('Thank you for your opinions! So long!')
  $('.sign').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.collapse').collapse('hide')
  $('.pw').hide()
  $('#submitModal').hide()
  $('#myReviews').hide()
  $('#review').html('')
}
const onSignOutFailure = function () {
  $('#message').html('Something went wrong, please check your internet connection.')
  $('#sign-in').show()
}

const onChangePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('.collapse').collapse('hide')
  $('#message').html('Your password is now updated!')
}
const onChangePasswordFailure = function () {
  $('#change-password').trigger('reset')
  $('#message').html('We were unable to update your password. Please ensure your old password is correct.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
