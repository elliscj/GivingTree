import { Schema, model } from "mongoose";
import dateFormat from "../utils/dateFormat";

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
    type: INT,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Donation = model("Donation", donationSchema);

export default Donation;
