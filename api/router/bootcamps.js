const express = require('express')
const router = express.Router();
const { getBootcamp,
  getBootcamps,
  putBootcamp,
  postBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps.js')

router.route('/')
  .get(getBootcamps)
  .post(postBootcamp)

router.route('/:id')
  .get(getBootcamp)
  .put(putBootcamp)
  .post(postBootcamp)
  .delete(deleteBootcamp)

module.exports = router
