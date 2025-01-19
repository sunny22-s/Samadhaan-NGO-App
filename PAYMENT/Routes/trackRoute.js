const express = require("express");
const router = express.Router();

const trackerController = require('./../Controllers/tracker')

router.route('/donations').get(trackerController.tracker);

router.route('/details').get(trackerController.trackDetails);

module.exports = router;