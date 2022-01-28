import { Schema, model } from "mongoose";
import dateFormat from "../utils/dateFormat";

const favoriteSchema = new Schema({
  charity_name: {
    type: String,
    required: true,
    unique: true,
  },
  donations: [
    {
      amount: {
        type: INT,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Favorite = model("Favorite", favoriteSchema);

export default Favorite;
