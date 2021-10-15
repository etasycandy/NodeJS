const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const peopleSchema = mongoose.Schema(
  {
    pName: {
      type: String,
      required: true,
      trim: true,
    },
    sex: {
      type: Boolean,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
peopleSchema.plugin(toJSON);
peopleSchema.plugin(paginate);

/**
 * @typedef People
 */
const People = mongoose.model('People', peopleSchema);

module.exports = People;
