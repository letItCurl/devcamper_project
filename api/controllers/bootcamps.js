const Bootcamp = require('../models/Bootcamp')

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' })
}

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Get bootcamp with ID' })
}

exports.postBootcamp = async (req, res, next) => {

  // STOP AT 7:35
  const bootcamp = await Bootcamp.create(req.body)
  res.status(201).json({ success: true, data: bootcamp })
}

exports.putBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Update bootcamp' })
}

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Delete bootcamp' })
}
