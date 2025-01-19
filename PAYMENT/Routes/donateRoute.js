const express = require("express");
const router = express.Router();

const donateController = require('./../Controllers/donation')

router.route('/payment').post(donateController.newPayment);

router.route('/status/:txnId').post(donateController.checkStatus);

module.exports = router;