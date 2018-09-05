const config = require('../config.js')
const store = require('../store.js')

// handles api calls retrieve all reviews by every reviewers
const allReviews = function () {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'GET'
  })
}
// handles api call to submit review from a user
const submitReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'review': {
        'topic': data.topic,
        'article': data.review,
        'user_id': store.user.id,
        'star': data.star
      }
    }
  })
}
// handles api call to delete a review made by a user
const deleteReview = function (id) {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const myReviews = function (id) {
  return $.ajax({
    url: config.apiUrl + '/reviews/?user_id=' + store.user.id,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
// handles api call to update a user's review
const updateReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + store.updateId,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'review': {
        'topic': data.topic,
        'article': data.review,
        'user_id': store.user.id,
        'star': data.star
      }
    }
  })
}
module.exports = {
  allReviews,
  submitReview,
  deleteReview,
  myReviews,
  updateReview
}
