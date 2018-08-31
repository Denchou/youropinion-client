
const store = require('../store')
const allReviewsListing = require('./all-reviews.handlebars')

const onAllReviewsSuccess = function (data) {
  $('#review').html('')
  const showReviewsHtml = allReviewsListing({ reviews: data.reviews })
  $('#review').append(showReviewsHtml)
}

const onAllReviewsFailure = function (data) {
  console.log('error getting data')
}

module.exports = {
  onAllReviewsSuccess,
  onAllReviewsFailure
}
