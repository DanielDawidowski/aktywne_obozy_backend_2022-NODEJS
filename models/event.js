const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    priceNoDiscount: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    amount: {
      type: Number,
      trim: true,
    },
    typeEvent: {
      type: String,
      trim: true,
    },
    startDate: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    endDate: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    images: {
      type: Array,
    },
    status: {
      type: String,
      default: "Aktualne",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
