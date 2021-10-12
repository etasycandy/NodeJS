const express = require('express');
const hoangController = require('../../controllers/hoang.controller');

const router = express.Router();

router.route('/').post(hoangController.createHoang).get(hoangController.getHoangs);

module.exports = router;
