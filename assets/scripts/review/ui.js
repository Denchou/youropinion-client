
const store = require('../store')
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
  // $('#review').html('')
  // const showMyReviewsHtml = myReviewsListing({reviews: data.reviews})
  // $('#review').append(showMyReviewsHtml)
  $('#review').html('')
  console.log(data, ' is data')
  const newData = data.reviews.filter(x => x.user.id === store.user.id)
  const showMyReviewsHtml = myReviewsListing({ reviews: newData })
  $('#review').append(showMyReviewsHtml)
  console.log(newData, ' is newdata')
  console.log(showMyReviewsHtml)
  // store.MyData = newData
}

const onMyReviewFailure = function (response) {
  $('#message').html('There was an error in retrieving your reviews.')
}

const onDeleteReviewSuccess = function () {
  $('#message').html('You have successfully removed your opinion from the internet. Good job!')
  $('#review').html('')
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
  onMyReviewFailure,
  onDeleteReviewSuccess,
  onDeleteReviewFailure
}
