const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// handler for reading all reviews submitted by all users
const onAllReviews = function (event) {
  event.preventDefault()
  api.allReviews()
    .then(ui.onAllReviewsSuccess)
    .catch(ui.onAllReviewsFailure)
}
// handler to close all reviews
const onCloseReviews = function (event) {
  event.preventDefault()
  console.log('close review event is ', event)
  $('#review').html('')
}
// handler submit a review by a user
const onSubmitReview = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  data.review = $('#reviewInput').val()

  api.submitReview(data)
    .then(ui.onSubmitReviewSuccess)
    .catch(ui.onSubmitReviewFailure)
}
// handler to show only reviews submitted by the user
const onMyReviews = function (event) {
  event.preventDefault()
  api.myReviews()
    .then(ui.onMyReviewsSuccess)
    .catch(ui.onMyReviewsFailure)
}
// handler to delete a user's review
const onDeleteReview = function (event) {
  event.preventDefault()
  const reviewId = $(event.target).closest('section').data('id')
  api.deleteReview(reviewId)
    .then(ui.onDeleteReviewSuccess)
    .catch(ui.onDeleteReviewFailure)
}

module.exports = {
  onAllReviews,
  onCloseReviews,
  onSubmitReview,
  onMyReviews,
  onDeleteReview
}
