const { Hoang } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a hoang
 * @param {Object} hoangBody
 * @returns {Promise<Hoang>}
 */
const createHoang = async (hoangBody) => {
  return Hoang.create(hoangBody);
};

/**
 * Query for hoangs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryHoangs = async (filter, options) => {
  const hoangs = await Hoang.paginate(filter, options);
  return hoangs;
};

module.exports = {
  createHoang,
  queryHoangs,
};
