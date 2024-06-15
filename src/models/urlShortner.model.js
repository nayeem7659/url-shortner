import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    clicks: [{ timestamp: { type: String } }],
  },
  {
    timestamps: true,
  }
);

const URL = mongoose.model("url", urlSchema);

export default URL;
