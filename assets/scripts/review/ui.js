
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
  console.log('FAILURE! Review data is ', response)
}

const onMyReviewsSuccess = function (data) {
  // $('#review').html('')
  // const showMyReviewsHtml = myReviewsListing({reviews: data.reviews})
  // $('#review').append(showMyReviewsHtml)
  $('#review').html('')
  const newData = data.reviews.filter(x => x.user.id === store.user.id)
  const showMyReviewsHtml = myReviewsListing({ reviews: newData })
  $('#review').append(showMyReviewsHtml)
}

const onMyReviewFailure = function (response) {
  console.log('FAILED')
}
module.exports = {
  onAllReviewsSuccess,
  onAllReviewsFailure,
  onSubmitReviewSuccess,
  onSubmitReviewFailure,
  onMyReviewsSuccess,
  onMyReviewFailure
}
