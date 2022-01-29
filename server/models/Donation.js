const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const donationSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  charity_name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Donation = model("Donation", donationSchema);

module.exports = Donation;
