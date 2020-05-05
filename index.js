const { Validator } = require('external-adapter')
const tor = require('tor-request')

const createRequest = (input, torIP, torPort, callback) => {
  const validator = new Validator(callback, input)
  const jobRunID = validator.validated.id
  tor.setTorAddress(torIP, torPort)
  tor.request('https://api.ipify.org', (error, res, body) => {
    if (!error) {
      callback(res.statusCode, {
        jobRunID,
        data: body
      })
    } else {
      callback(500, {
        jobRunID,
        status: 'errored',
        error
      })
    }
  })
}

module.exports.createRequest = createRequest
