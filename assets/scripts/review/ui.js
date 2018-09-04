
// const store = require('../store')
const allReviewsListing = require('./all-reviews.handlebars')

const onAllReviewsSuccess = function (data) {
  $('#review').html('')
  const showReviewsHtml = allReviewsListing({ reviews: data.reviews })
  $('#review').append(showReviewsHtml)
}

const onAllReviewsFailure = function (data) {
  console.log('error getting data')
}

const onSubmitReviewSuccess = function (response) {
  const data = response.review
  $('#topic').val('')
  $('#reviewInput').val('')
  $('#star-1').prop('checked', true)
  $('#reviewModal').modal('toggle')
  console.log('SUCCESS! Review ID is ', data)
}

const onSubmitReviewFailure = function (response) {
  console.log('FAILURE! Review data is ', response)
}
module.exports = {
  onAllReviewsSuccess,
  onAllReviewsFailure,
  onSubmitReviewSuccess,
  onSubmitReviewFailure
}
