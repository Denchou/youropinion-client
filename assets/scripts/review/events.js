const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAllReviews = function (event) {
  event.preventDefault()
  api.allReviews()
    .then(ui.onAllReviewsSuccess)
    .catch(ui.onAllReviewsFailure)
}

module.exports = {
  onAllReviews
}
