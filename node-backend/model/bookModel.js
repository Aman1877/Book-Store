// Schema of books

import mongoose from "mongoose";

// Creating Schema
const BookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
});

// Collection name means table name
export default mongoose.model("book", BookSchema);
