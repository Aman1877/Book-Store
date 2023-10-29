import express from "express";
import {
  addBookController,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controller/BookController.js";

// Router object
const router = express.Router();

// Routing
// Add books
router.post("/add-book", addBookController);

// Get all books
router.get("/all-books", getAllBooks);

// Get book by id
router.get("/read-book/:id", getBookById);

// Update book
router.put("/update-book/:id", updateBook);

// Delete book
router.delete("/delete-book/:id", deleteBook);

export default router;
