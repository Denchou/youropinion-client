
const store = require('../store')
const api = require('./api')
const allReviewsListing = require('./all-reviews.handlebars')
const myReviewsListing = require('./my-reviews.handlebars')

const onAllReviewsSuccess = function (data) {
  $('#message').html('Here is a list of all reviews!')
  $('#review').html('')
  const showReviewsHtml = allReviewsListing({ reviews: data.reviews })
  $('#review').append(showReviewsHtml)
}

const onAllReviewsFailure = function (data) {
  $('#message').html('We are unable to process your request.')
}

const onSubmitReviewSuccess = function (response) {
  const data = response.review
  $('#topic').val('')
  $('#reviewInput').val('')
  $('#star-1').prop('checked', true)
  $('#reviewModal').modal('toggle')
  $('#message').html('You have successfully submitted your review!')
}

const onSubmitReviewFailure = function (response) {
  $('#message').html('There was an error in submitting your review.')
}

const onMyReviewsSuccess = function (data) {
  $('#message').html('Your reviews...')
  $('#review').html('')
  const showMyReviewsHtml = myReviewsListing({reviews: data.reviews})
  $('#review').append(showMyReviewsHtml)
}

const onMyReviewsFailure = function (response) {
  $('#message').html('There was an error in retrieving your reviews.')
}

const onDeleteReviewSuccess = function () {
  $('#message').html('You have successfully removed your opinion from the internet. Good job!')
  $('#review').html('')
  api.myReviews()
    .then(onMyReviewsSuccess)
    .catch(onMyReviewsFailure)
}

const onDeleteReviewFailure = function (response) {
  $('#message').html('There was an error in deleting your review')
}

module.exports = {
  onAllReviewsSuccess,
  onAllReviewsFailure,
  onSubmitReviewSuccess,
  onSubmitReviewFailure,
  onMyReviewsSuccess,
  onMyReviewsFailure,
  onDeleteReviewSuccess,
  onDeleteReviewFailure
}
