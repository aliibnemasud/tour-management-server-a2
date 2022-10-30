const express = require('express');
const tourController = require('../../controller/tours.controller');
const router = express.Router();

/* router.get('/', toolsController.getAllTours);
router.post('/', toolsController.postTour); */

router.route('/')

/**
 * @api {get} Get all the tour details
 * @require {admin}
 */
.get(tourController.getAllTours)

/**
 * @api {post} post a tour
 * @require {admin}
 */
.post(tourController.postTour)





module.exports = router;