const config = require('../config.js')
const store = require('../store.js')
// handles api calls related to user account
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

// handles api call for account sign-in
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  signIn
}
