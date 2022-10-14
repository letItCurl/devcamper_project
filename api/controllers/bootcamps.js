exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' })
}

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Get bootcamp with ID' })
}

exports.postBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' })
}

exports.putBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Update bootcamp' })
}

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Delete bootcamp' })
}
