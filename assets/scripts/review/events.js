const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onAllReviews = function (event) {
  event.preventDefault()
  api.allReviews()
    .then(ui.onAllReviewsSuccess)
    .catch(ui.onAllReviewsFailure)
}

const onCloseReviews = function (event) {
  event.preventDefault()
  console.log('close review event is ', event)
  $('#review').html('')
}

const onSubmitReview = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  data.review = $('#reviewInput').val()

  api.submitReview(data)
    .then(ui.onSubmitReviewSuccess)
    .catch(ui.onSubmitReviewFailure)
}

module.exports = {
  onAllReviews,
  onCloseReviews,
  onSubmitReview
}
