const Bootcamp = require('../models/Bootcamp')

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find()

    res.status(200).json({ success: true, data: bootcamps, count: bootcamps.length })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) res.status(400).json({ success: false, error: 'Not found' })
    res.status(200).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

exports.postBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

exports.putBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if (!bootcamp) res.status(400).json({ success: false, error: 'Not found' })
    res.status(201).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndRemove(req.params.id)

    if (!bootcamp) res.status(400).json({ success: false, error: 'Not found' })
    res.status(201).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}
