
const store = require('../store')
const api = require('./api')
const allReviewsListing = require('./all-reviews.handlebars')
const myReviewsListing = require('./my-reviews.handlebars')

// ui for successful index call
const onAllReviewsSuccess = function (data) {
  $('#message').html('Here is a list of all the opinions on the internet!')
  $('#review').html('')
  const showReviewsHtml = allReviewsListing({ reviews: data.reviews })
  $('#review').append(showReviewsHtml)
}
// ui response for unsuccessful index call
const onAllReviewsFailure = function (data) {
  $('#message').html('We are unable to process your request.')
}
// ui response for successful create
const onSubmitReviewSuccess = function (response) {
  const data = response.review
  $('#topic').val('')
  $('#reviewInput').val('')
  $('#star-1').prop('checked', true)
  $('#reviewModal').modal('toggle')
  $('#message').html('You have successfully submitted your opinion!')
}
// ui response for unsuccessful create
const onSubmitReviewFailure = function (response) {
  $('#message').html('There was an error in submitting your opinion!.')
}
// ui response for successful user_id query index call
const onMyReviewsSuccess = function (data) {
  $('#message').html('Are you happy with your opinions?')
  $('#review').html('')
  const showMyReviewsHtml = myReviewsListing({reviews: data.reviews})
  $('#review').append(showMyReviewsHtml)
  store.reviews = data.reviews
}
// ui response for unsuccessful user_id query index call
const onMyReviewsFailure = function (response) {
  $('#message').html('There was an error in retrieving your reviews.')
}
// ui response for successful delete
const onDeleteReviewSuccess = function () {
  $('#message').html('You have successfully removed your opinion from the internet. Good job!')
  $('#review').html('')
  api.myReviews()
    .then(onMyReviewsSuccess)
    .catch(onMyReviewsFailure)
}

const onDeleteReviewFailure = function (response) {
  $('#message').html('There was an error in deleting your opinion!')
}

const onUpdateReviewSuccess = function (response) {
  const data = response.review
  $('#topic').val('')
  $('#reviewInput').val('')
  $('#star-1').prop('checked', true)
  $('#reviewModal').modal('toggle')
  $('#message').html('Bravo! You changed your opinion on something! What next? World Peace?!')
  store.update = false
}

const onUpdateReviewFailure = function (response) {
  $('#message').html('There was an error in updating your opinion!')
  store.update = false
}

module.exports = {
  onAllReviewsSuccess,
  onAllReviewsFailure,
  onSubmitReviewSuccess,
  onSubmitReviewFailure,
  onMyReviewsSuccess,
  onMyReviewsFailure,
  onDeleteReviewSuccess,
  onDeleteReviewFailure,
  onUpdateReviewSuccess,
  onUpdateReviewFailure
}
