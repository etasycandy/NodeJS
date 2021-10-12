const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { hoangService } = require('../services');

const createHoang = catchAsync(async (req, res) => {
  const hoang = await hoangService.createHoang(req.body);
  res.status(httpStatus.CREATED).send(hoang);
});

const getHoangs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await hoangService.queryHoangs(filter, options);
  res.send(result);
});

module.exports = {
  createHoang,
  getHoangs,
};
