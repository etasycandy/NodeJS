const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const hoangSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
hoangSchema.plugin(toJSON);
hoangSchema.plugin(paginate);

/**
 * @typedef Hoang
 */
const Hoang = mongoose.model('Hoang', hoangSchema);

module.exports = Hoang;
