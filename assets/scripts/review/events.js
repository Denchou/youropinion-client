const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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
  $('#review').html('')
  $('#message').html('What would you like to do?')
}
// handler submit a review by a user
const onSubmitReview = function (event) {
  event.preventDefault()
  if (!store.update) {
    const data = getFormFields(event.target)
    data.review = $('#reviewInput').val()

    api.submitReview(data)
      .then(ui.onSubmitReviewSuccess)
      .catch(ui.onSubmitReviewFailure)
  } else { }
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
const onUpdateReview = function (event) {
  event.preventDefault()
  store.update = true
  $('#submitForm').hide()
  $('#updateForm').show()
  const reviewId = $(event.target).closest('section').data('id')
  const arr = store.reviews.find(x => x.id === reviewId)
  $('#topic').val(arr.topic)
  $('#reviewInput').val(arr.article)
  $('#reviewModal').modal('show')
  $('reviewModalLabel').html('Update your review')
  $(`#star-${arr.star}`).prop('checked', true)
  $('#reviewForm').on('submit', onSendUpdate)
  store.updateId = reviewId
}
// Resets the review submission form everytime Submit a Review button is clicked
const modalReset = function (event) {
  event.preventDefault()
  $('#submitForm').show()
  $('#updateForm').hide()
  $('#reviewModalLabel').html('Submit your review')
  $('#topic').val('')
  $('#reviewInput').val('')
  $('#star-1').prop('checked', true)
}

const onSendUpdate = function (event) {
  event.preventDefault()
  if (store.update) {
    const data = getFormFields(event.target)
    data.review = $('#reviewInput').val()
    api.updateReview(data)
      .then(ui.onUpdateReviewSuccess)
      .catch(ui.onUpdateReviewFailure)
  } else { }
}

module.exports = {
  onAllReviews,
  onCloseReviews,
  onSubmitReview,
  onMyReviews,
  onDeleteReview,
  onUpdateReview,
  modalReset,
  onSendUpdate
}
