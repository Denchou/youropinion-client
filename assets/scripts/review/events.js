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
  console.log(event.target.textarea, ' text area!!')
  console.log(event, 'is event')
  console.log('review input is ', $('#reviewInput').val())
  const data = getFormFields(event.target)
  data.review = $('#reviewInput').val()
  console.log(data, ' is data')
}

module.exports = {
  onAllReviews,
  onCloseReviews,
  onSubmitReview
}
