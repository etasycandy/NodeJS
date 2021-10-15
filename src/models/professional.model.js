const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const professionalSchema = mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
professionalSchema.plugin(toJSON);
professionalSchema.plugin(paginate);

/**
 * @typedef Professional
 */
const Professional = mongoose.model('Professional', professionalSchema);

module.exports = Professional;
