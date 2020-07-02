const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      default: [],
    },
    category: {
      type: String,
    },
    subcategory: {
      type: String,
    },
    size: { type: String },
    units: { type: String },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      title: "5",
      description: "1",
    },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
