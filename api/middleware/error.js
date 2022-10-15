const errorHandler = (err, req, res, next) => {
  console.log('ERROR: ', err.stack)
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server error'
  })
}

module.exports = errorHandler
