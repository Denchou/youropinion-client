const config = require('../config.js')
const store = require('../store.js')

// handles api calls retrieve all reviews by every reviewers
const allReviews = function () {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'GET'
  })
}

module.exports = {
  allReviews
}
